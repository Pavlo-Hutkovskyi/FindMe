import {Component, OnInit} from '@angular/core';
import {ModalService} from "./services/modal/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularSite';
  showModal: boolean = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.modalState$.subscribe((state: boolean) => {
      this.showModal = state;
    });
  }
}
