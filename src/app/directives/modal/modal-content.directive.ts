import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appModalContent]'
})
export class ModalContentDirective implements OnInit{
  @Input('appModalContent') appModalContent!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    console.log(this.appModalContent)
    if (this.appModalContent) {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.appModalContent);
    }
  }
}
