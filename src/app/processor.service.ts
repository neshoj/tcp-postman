import { Injectable } from '@angular/core';
import { Request } from './request';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import { Processedtnx } from '../app/processedtnx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProcessorService {
  private backendServerUrl = 'http://localhost:9810/api/transact';  // Transaction URL
  private projectSearchURL = 'http://localhost:9810/api/search/projectName';  // search project name URL
  private allTransactionURL = 'http://localhost:9810/api/statistics';  // find all processed transaction count URL
  response = 'No details received';
  responsePresent = false;
  count = '0';
  isError = false;

  constructor(private http: HttpClient) { }

  sendRequest(payload: Request): Observable<string> {
    // send request and handle errors
    return this.http.post<string>(this.backendServerUrl, payload, httpOptions)
      .pipe(
      tap(result => {
        this.response = JSON.stringify(result['result']);
        this.responsePresent = true;
        this.count = result['processedCount'];
      }),
      catchError(this.handleError('transaction', JSON.stringify({
        status: '01',
        message: 'error occurred processing transaction'
      })))
      );
  }

  findProcessedTransactions(): Observable<Processedtnx> {
    return this.http.get<Processedtnx>(this.allTransactionURL)
      .pipe(
      tap(result => {
        console.log('Fetch statistics message: ' + result['message']);
        this.count = result['processedCount'];
      })
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
      this.responsePresent = true;
      this.isError = true;
      // Let the app keep running by returning error json object.
      return of(result as T);
    };
  }
}
