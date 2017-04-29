import { Http, Headers, URLSearchParams, RequestOptions, ResponseContentType } from '@angular/http';
import { Injectable } from '@angular/core';
import { GlobalVarsService } from './global-vars.service';
import * as FileSaver from 'file-saver';

@Injectable()
export class DownloadCvService {

    baseUrl; //the root url

    errorHandler = error => console.error('project Service error', error);

    constructor(private http: Http,
        private globalvarsService: GlobalVarsService) {//inject http and globalvarsService services
        this.baseUrl = this.globalvarsService.baseUrl; //assign the base url

    }

    downloadFile(): Promise<any> {

        let options = new RequestOptions({ responseType: ResponseContentType.Blob });
        return this.http.get(`${this.baseUrl}/api/cv`, options)
            .toPromise().then(res => this.extractContent(res, 'CV_Hen_BarLevi_FullstackDev'))
            .catch(this.errorHandler);
    }

    private extractContent(res, filename) {
        console.log(res);//DEBUG
        let blob: Blob = res.blob();
        FileSaver['saveAs'](blob, filename);
    }
}