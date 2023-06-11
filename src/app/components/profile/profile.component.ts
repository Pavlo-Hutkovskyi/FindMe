import {Component, TemplateRef, ViewChild} from '@angular/core';
import {IUser} from "../../../assets/models/IUser";
import {ModalService} from "../../services/modal/modal.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user!: IUser;
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;

  constructor(private modalService: ModalService) {
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
  }

  openModal(contentTemplate: TemplateRef<any>) {
    this.modalService.openModal(contentTemplate);
  }
}
