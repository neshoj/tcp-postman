import { tick } from '@angular/core/testing';

export class Request {
    constructor(
        private _timeOut: string,
        private _serverIP: string,
        private _serverPort: string,
        private _requestJson: string
    ) { }

    set timeOut(time: string) {
        this._timeOut = time;
    }

    set serverIP(ipAddress: string) {
        this._serverIP = ipAddress;
    }

    set serverPort(port: string) {
        this._serverPort = port;
    }

    set requestJson(request: string) {
        this._requestJson = request;
    }

    get requestJson() {
        return this._requestJson;
    }

}
