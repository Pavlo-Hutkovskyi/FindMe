import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {IUser} from "../../../assets/models/IUser";
import {ModalService} from "../../services/modal/modal.service";
import {UserService} from "../../services/user/user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
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
      districtId : "",
      name: "",
    }
  };
  showModal: boolean = false;

  constructor(private modalService: ModalService, private userService: UserService) {}

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
}
