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
      sessions =  DATA.find(event => event.description === searchTerm).sessions
      results = sessions.filter(session => session.Percentage > 79)

      var emitter = new EventEmitter(true)
      setTimeout(()=>
      {
      emitter.emit(results)
      }, 0)
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
      })


      var emitter = new EventEmitter(true)
      setTimeout(()=>
      {
      emitter.emit(results)
      }, 100)
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
              Percentage: 80,
              transactionYtpeCode:"skdhfafa",
              isSelected : false
          },

          {
              id: 2,
              SKU: 202,
              Percentage: 90,
              transactionYtpeCode:"skdhfafa",
              isSelected : false
          },
          {
              id: 2,
              SKU: 203,
              Percentage: 40,
              transactionYtpeCode:"skdhfafa",
              isSelected : false
          }

      ]
  }

    
    
]


