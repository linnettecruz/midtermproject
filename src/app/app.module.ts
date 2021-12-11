import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ButtonComponent } from './button/button.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    ButtonComponent,
    AccomodationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
