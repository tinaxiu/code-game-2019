import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { of } from 'rxjs';

const url = 'http://localhost:31326/api/upload';
const senSimUrl = 'http://localhost:31326/api/CalcScore/short';

export interface SenSimResponse {
  input: string,
  responses: [{
    transactionTypeCode: string,
    description: string,
    percentMatch: number
  }]
}

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) { }

  public upload(
    files: File
  ): { progress: Observable<number>, results: Observable<SenSimResponse[]> } {
    // create a new multipart-form for every file
    const formData: FormData = new FormData();
    formData.append('file', files, files.name);

    // create a http-post request and pass the form
    // tell it to report the upload progress
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true
    });

    // create a new progress-subject for every file
    const progress = new Subject<number>();
    const results: SenSimResponse[] = [];

    // send the http-request and subscribe for progress-updates
    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // calculate the progress percentage

        const percentDone = Math.round((100 * event.loaded) / event.total);
        // pass the percentage into the progress-stream
        progress.next(percentDone);
      } else if (event instanceof HttpResponse) {
        // Close the progress-stream if we get an answer form the API
        // The upload is complete
        if (event.status == 200) {
          var bodyArray = event.body as SenSimResponse[];
          bodyArray.forEach(val => {
            results.push(val);
          });
        }
        
        progress.complete();
      }
    });

    // Save every progress-observable in a map of all observables
    const status: { progress: Observable<number>, results: Observable<SenSimResponse[]> } = {
      progress: progress.asObservable(),
      results: of(results)
    };

    // return the map of progress.observables
    return status;
  }
}