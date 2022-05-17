import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersSource = new BehaviorSubject<any>([]);
  users = this.usersSource.asObservable();
  addUser(obj : any) {
    const {name, email, age} = obj;
    this.usersSource.next([...this.usersSource.getValue(), {name, email, age}]);
  }
}
