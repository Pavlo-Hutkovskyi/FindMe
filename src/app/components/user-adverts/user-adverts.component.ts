import {Component, Input} from '@angular/core';
import {IUserAdvert} from "../../../assets/models/IUserAdvert";

@Component({
  selector: 'app-user-adverts',
  templateUrl: './user-adverts.component.html',
  styleUrls: ['./user-adverts.component.scss']
})
export class UserAdvertsComponent {
  @Input() advert!: IUserAdvert;

  constructor() {
  }
}
