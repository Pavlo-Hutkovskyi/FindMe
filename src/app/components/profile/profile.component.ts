import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../assets/models/IUser";
import {ModalService} from "../../services/modal/modal.service";
import {UserService} from "../../services/user/user.service";
import {Subscription} from "rxjs";
import {IUserAdvert} from "../../../assets/models/IUserAdvert";
import {AdvertService} from "../../services/advert/advert.service";
import {animate, keyframes, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('swipeAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('0.3s ease-in', keyframes(([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ])))
        ]), {optional : true})
      ])
    ]),
    trigger('slowFillBlack', [
      state('no-active', style({backgroundColor: 'white'})),
      state('active', style({backgroundColor: 'black'})),

      transition('no-active <=> active', animate('500ms ease-in-out'))
    ])
  ]
})
export class ProfileComponent implements OnInit {
  subscription!: Subscription;
  user: IUser = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    salt: "",
    district: {
      id: "",
      districtId: "",
      name: "",
    }
  };
  showModal = false;
  isMatched = true;
  advertList: IUserAdvert[] = [];

  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private advertService: AdvertService) {}

  async ngOnInit() {
    this.subscription = this.userService.userState$.subscribe(user => {
      this.user = user;
    })
    this.userService.pushUserToStream();

    this.advertList = await this.advertService.getAdvertsByUser(this.user.phoneNumber);

    this.modalService.modalState$.subscribe(state => {
      this.showModal = state;
    });
  }

  openModal() {
    this.modalService.openModal();
  }

  swipe() {
    this.isMatched = !this.isMatched;
  }

  getAdvertList() {
    return this.advertList.filter(advert => advert.isMatched == this.isMatched);
  }
}
