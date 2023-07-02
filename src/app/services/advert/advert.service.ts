import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {IUser} from "../../../assets/models/IUser";
import {IUserAdvert} from "../../../assets/models/IUserAdvert";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  private advertsStateSubject = new Subject<IUserAdvert[]>();

  advertsState$ = this.advertsStateSubject.asObservable();

  adverts: IUserAdvert[] = [];

  constructor() {
  }

  delays(ms: number) {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
  }

  async getAdvertsByUser(id: string) {
    await this.delays(2000);
    this.adverts = [
      {
        id: "2e2dwdwіdew",
        description: "Сіль",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: true,
        isUrgent: false,
        isMatched: false,
        userId: "dsewd2sd",
        helpType: 0
      },
      {
        id: "wef43f3243",
        description: "Приправи",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: false,
        isUrgent: true,
        isMatched: true,
        userId: "t43234g23",
        helpType: 0
      },
      {
        id: "sdf2342",
        description: "Масло",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: true,
        isUrgent: true,
        isMatched: false,
        userId: "sd32wee",
        helpType: 0
      },
      {
        id: "we23fd34",
        description: "Цукор",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: true,
        isUrgent: false,
        isMatched: true,
        userId: "234sdf23",
        helpType: 0
      },
      {
        id: "43f32dsw",
        description: "Мука",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: false,
        isUrgent: false,
        isMatched: true,
        userId: "3t45rt45",
        helpType: 0
      },
      {
        id: "we32dew3",
        description: "Олія",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: true,
        isUrgent: true,
        isMatched: true,
        userId: "5g43fg43",
        helpType: 0
      },
      {
        id: "56gfdg43g",
        description: "Сир",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: true,
        isUrgent: true,
        isMatched: false,
        userId: "df43f34",
        helpType: 0
      },
      {
        id: "d43fg43g",
        description: "Крупа",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: true,
        isUrgent: false,
        isMatched: true,
        userId: "34gfd43",
        helpType: 0
      },
      {
        id: "we43f43",
        description: "Сода",
        publicationDate: Date.now().toString(),
        isAdvertAboutNeed: false,
        isUrgent: true,
        isMatched: false,
        userId: "2ed32d2",
        helpType: 0
      }
    ];
    this.pushAdvertsToStream();
    return this.adverts;
  }

  pushAdvertsToStream(adverts?: IUserAdvert[]) {
    if (adverts !== undefined)
      this.advertsStateSubject.next(adverts)
    else
      this.advertsStateSubject.next(this.adverts)
  }
}
