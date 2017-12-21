import { Injectable } from '@angular/core';
import { Request } from './request';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProcessorService {

  response = 'some response';

  constructor() { }

  sendRequest(payload: Request): Observable<string> {
    this.response = payload.requestJson;
    return of(this.response);
  }

}
