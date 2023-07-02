import { Injectable } from '@angular/core';
import {IUser} from "../../../assets/models/IUser";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userStateSubject = new Subject<IUser>();

  userState$ = this.userStateSubject.asObservable();

  user!: IUser;

  constructor() {
    this.getUser();
  }

  getUser() {
    this.user = {
      firstName: "Name",
      lastName: "Surname",
      phoneNumber: "+3345565656",
      email: "dsew@gmail.com",
      password: "dsferfe34243sd23d32d232d32d2d3",
      salt: "edferf42fr4rf2444",
      district: {
        id: "dsf3ef3f3f3f3f3f3",
        districtId : "sdfefwefwfwfwfw",
        name: "Lvivska oblast",
      }
    }
    this.pushUserToStream()
  }

  pushUserToStream(user?: IUser) {
    if(user != undefined)
      this.userStateSubject.next(user)
    else
      this.userStateSubject.next(this.user)
  }
}
