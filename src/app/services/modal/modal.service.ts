import {Injectable, TemplateRef} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalStateSubject = new Subject<boolean>();
  private modalContentTemplateSubject = new Subject<TemplateRef<any> | null>();

  modalState$ = this.modalStateSubject.asObservable();
  modalContentTemplate$ = this.modalContentTemplateSubject.asObservable();

  openModal(contentTemplate: TemplateRef<any>) {
    console.log(contentTemplate)
    this.modalStateSubject.next(true);
    this.modalContentTemplateSubject.next(contentTemplate);
  }

  closeModal() {
    this.modalStateSubject.next(false);
    this.modalContentTemplateSubject.next(null);
  }
}
