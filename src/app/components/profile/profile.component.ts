import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../assets/models/IUser";
import {ModalService} from "../../services/modal/modal.service";
import {UserService} from "../../services/user/user.service";
import {Subscription} from "rxjs";
import {IUserAdvert} from "../../../assets/models/IUserAdvert";
import {HelpType} from "../../../assets/models/HelpType";
import {AdvertService} from "../../services/advert/advert.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
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

  constructor(private modalService: ModalService, private userService: UserService, private advertService: AdvertService) {
  }

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
