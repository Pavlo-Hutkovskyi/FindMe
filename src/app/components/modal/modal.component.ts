import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../../services/modal/modal.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  title: string = 'Title';

  constructor(private modalService: ModalService) {}

  closeModal() {
    this.modalService.closeModal();
  }
}
