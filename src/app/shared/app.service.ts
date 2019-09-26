import { Injectable, EventEmitter } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { IData, ISession} from './app.modal';

@Injectable()
export class AppService {
    getEvents():Observable<IData[]>
    {
      let subject = new Subject<IData[]>()
      // every 100mm add date from stream to subject
      setTimeout(() => {subject.next(DATA); subject.complete(); },
      100)
      return subject
    }

    getEvent(id:number):IData{
      return DATA.find(event => event.id === id)
    }

    saveEvent(event)
    {
      event.id = 999
      event.session = []
      DATA.push(event)
    }

    updateEvent(event)
    {
      let index = DATA.findIndex(x => x.id = event.id)
      DATA[index] = event
    }

    searchSessions(searchTerm: string)
    {
        
        var results: ISession[]  = []
        var sessions: ISession[]  = []
        sessions =  DATA.find(event => event.description = searchTerm).sessions
        results = sessions.filter(session => session.Percentage > 79)

        var emitter = new EventEmitter(true)
        setTimeout(()=>
        {
        emitter.emit(results)
        }, 1000)
        return emitter

        
    }
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
                transactionYtpeCode:"skdhfafa"
            },

            {
                id: 1,
                SKU: 102,
                Percentage: 90,
                transactionYtpeCode:"skdhfafa"
            },
            {
                id: 1,
                SKU: 102,
                Percentage: 40,
                transactionYtpeCode:"skdhfafa"
            }

        ]
    }

    
    
]


