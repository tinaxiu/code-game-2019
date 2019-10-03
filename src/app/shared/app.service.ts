import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { IData, ISession} from './app.modal';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './error-handler.service';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AppService {

  apiURL = 'http://localhost:31326/api/calcscore/short/';

  public searchTerms: string
  private handleError: HandleError;
  private headers: HttpHeaders;
  response: ISession[] = []
  responses: IData[] = []

  constructor(private http: HttpClient) {
    
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  }

  async getResults(searchTerm: string) {
    console.log("getResults")
    this.response =  await this.http.get<ISession[]>(this.apiURL+ this.searchTerms, {headers: this.headers}).toPromise();
    return this.response

  }

  getEvents():Observable<ISession[]>
  {
    let subject = new Subject<ISession[]>()
    // every 100mm add date from stream to subject
    setTimeout(() => {subject.next(this.response); subject.complete(); },
    100)
    return subject
  }

  async searchData(searchTerm: string)
  {
    console.log("searchData")

    this.responses =  await this.http.post<IData[]>(this.apiURL, searchTerm, {headers: this.headers}).toPromise();
    return this.responses


  }

}

function sortByPercentage(p1: ISession, p2: ISession)
{
    if(p1.percentMatch < p2.percentMatch) return 1
    else if(p1.percentMatch === p2.percentMatch) return 0
    else return -1
}


