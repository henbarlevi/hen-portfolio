import { Http, Headers, URLSearchParams, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalVarsService } from './global-vars.service';

@Injectable()
export class EmailService {

    baseUrl; //the root url
    errorHandler = error => console.error('project Service error', error);

    constructor(private http: Http,
        private globalvarsService: GlobalVarsService) {//inject http and globalvarsService services
        this.baseUrl = this.globalvarsService.baseUrl; //assign the base url

    }

    sendEmail(info) {
        const json = JSON.stringify(info); //convert project to json
        console.log(json);
        const headers = new Headers({ 'content-Type': 'application/json' });
        return this.http.post(`${this.baseUrl}/api/email`, json, { headers: headers }).toPromise()
    }
}