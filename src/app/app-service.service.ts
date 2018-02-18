import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export class AppServiceService {

  constructor() { }
  public getUsers() {
    let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
    {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
    {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
    {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    return Observable.of(fakeUsers);
    }

}
