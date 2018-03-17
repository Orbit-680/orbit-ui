import { TicketsService } from './tickets/tickets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ValidationService } from './shared/validation-messages.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from './shared/validation-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    HomeComponent,
    ValidationMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    TicketsService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
