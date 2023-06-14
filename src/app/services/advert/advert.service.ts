import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {IUser} from "../../../assets/models/IUser";
import {IUserAdvert} from "../../../assets/models/IUserAdvert";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  // private advertsStateSubject = new Subject<IUserAdvert>();
  //
  // advertsState$ = this.advertsStateSubject.asObservable();
  //
  // constructor() { }
  //
  // pushToStreamUser(user?: IUser) {
  //   if(user != undefined)
  //     this.userStateSubject.next(user)
  //   else
  //     this.userStateSubject.next(this.user)
  // }
}
