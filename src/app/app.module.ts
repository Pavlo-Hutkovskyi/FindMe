import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { UserAdvertsComponent } from './components/user-adverts/user-adverts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ModalComponent,
    UserAdvertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
