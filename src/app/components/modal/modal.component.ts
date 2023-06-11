import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from "../../services/modal/modal.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  title: string = 'Title';
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalContentTemplate$.subscribe((templateRef: any) => {
      this.contentTemplate = templateRef;
      console.log('here', this.contentTemplate);
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
