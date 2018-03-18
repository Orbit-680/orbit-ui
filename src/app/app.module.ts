import { TicketsService } from './tickets/tickets.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessagesComponent } from './shared/validation-messages/validation-messages.component';
import { ValidationMessagesService } from './shared/validation-messages/validation-messages.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { RoleService } from './shared/role/role.service';

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    TicketsService,
    ValidationMessagesService,
    AuthService,
    AuthGuardService,
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
