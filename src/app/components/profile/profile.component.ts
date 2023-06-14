import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../assets/models/IUser";
import {ModalService} from "../../services/modal/modal.service";
import {UserService} from "../../services/user/user.service";
import {Subscription} from "rxjs";
import {IUserAdvert} from "../../../assets/models/IUserAdvert";
import {HelpType} from "../../../assets/models/HelpType";

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

  constructor(private modalService: ModalService, private userService: UserService) {
    this.swipe();
    console.log(this.advertList.length)
    setTimeout(() => {
      this.advertList = [
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
    }, 2000)
  }

  ngOnInit() {
    this.subscription = this.userService.userState$.subscribe(user => {
      this.user = user;
    })
    this.userService.pushToStreamUser();
    this.modalService.modalState$.subscribe((state: boolean) => {
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
