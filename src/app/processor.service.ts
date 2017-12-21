import { Injectable } from '@angular/core';
import { Request } from './request';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProcessorService {
  private backendServerUrl = 'https://cobblepot.quickpay.co.ke/passport';  // Back end server URL
  response = 'No details received';

  constructor(private http: HttpClient) { }

  sendRequest(payload: Request): Observable<string> {
    // send request and handle errors
    return this.http.post<string>(this.backendServerUrl, payload, httpOptions)
      .pipe(
      tap(result => this.response =  JSON.stringify(result)),
      catchError(this.handleError('transaction', JSON.stringify({
        status: '01',
        message: 'error occurred processing transaction'
      })))
      );
  }

  /**
 * Handle Http operation that failed.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      //  set error response
      this.response = JSON.stringify({
        status: '01',
        message: 'error occurred processing transaction'
      });

      // Let the app keep running by returning error json object.
      return of(result as T);
    };
  }
}
