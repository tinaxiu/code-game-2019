import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { IData, ISession} from './app.modal';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './error-handler.service';
import { catchError } from 'rxjs/operators';
@Injectable()
export class AppService {

  apiURL = 'localhost:31326/api/calcscore/';

  searchTerms: string[]
  private handleError: HandleError;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html'
    })
  }  

  getResults(searchTerm: string) {
    return this.http.get("localhost:31326/api/calcscore/brown dog/red fox,hello world", {headers: this.headers});
  }

  putResult(searchTerm): Observable<ISession> {
    return this.http.put<ISession>(this.apiURL,searchTerm, this.httpOptions)
    .pipe(
    )
  }

  getEvents():Observable<IData[]>
  {
    let subject = new Subject<IData[]>()
    // every 100mm add date from stream to subject
    setTimeout(() => {subject.next(DATA); subject.complete(); },
    100)
    return subject
  }

  searchSessions(searchTerm: string)
  {
      
      var results: ISession[]  = []
      var sessions: ISession[]  = []
      sessions =  DATA.find(event => event.description === searchTerm).sessions
      results = sessions.filter(session => session.Percentage > 79)
      results.sort(sortByPercentage)
      var emitter = new EventEmitter(true)
      setTimeout(()=>
      {
      emitter.emit(results)
      }, 10)
      return emitter        
  }

    searchData(searchTerm: string)
    {
      var results: IData[]  = []
      var dataItems: IData[]  = []
      var terms: string[]
      terms = searchTerm.split(',')

      DATA.forEach(data => {
        if(terms.includes(data.description))
          
          results = results.concat(data)
        }
      )
      
      results.forEach( result =>
        {
          var filterResults = result.sessions.filter(
            session => session.Percentage > 79
          )
          filterResults.sort(sortByPercentage)
          result.sessions = filterResults
        })
      
      var emitter = new EventEmitter(true)
      setTimeout(()=>
      {
      emitter.emit(results)
      }, 10)
      return emitter   

    }

}

function sortByPercentage(p1: ISession, p2: ISession)
{
    if(p1.Percentage < p2.Percentage) return 1
    else if(p1.Percentage === p2.Percentage) return 0
    else return -1
}

const DATA:IData[] = [

    {
        id : 1,
        description: "s",

        sessions:
        [
            {
                id: 1,
                SKU: 101,
                Percentage: 80,
                transactionYtpeCode:"skdhfafa",
                isSelected : false
            },

            {
                id: 1,
                SKU: 102,
                Percentage: 90,
                transactionYtpeCode:"skdhfafa",
                isSelected : false
            },
            {
                id: 1,
                SKU: 103,
                Percentage: 40,
                transactionYtpeCode:"skdhfafa",
                isSelected : false
            }

        ]
    },
    {
      id : 2,
      description: "d",

      sessions:
      [
          {
              id: 2,
              SKU: 201,
              Percentage: 90,
              transactionYtpeCode:"skdhfafa",
              isSelected : false
          },

          {
              id: 2,
              SKU: 202,
              Percentage: 88,
              transactionYtpeCode:"skdhfafa",
              isSelected : false
          },
          {
              id: 2,
              SKU: 203,
              Percentage: 98,
              transactionYtpeCode:"skdhfafa",
              isSelected : false
          }

      ]
  }

    
    
]


