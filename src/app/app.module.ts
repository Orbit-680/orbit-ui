import { BugsService } from './bugs/bugs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';


@NgModule({
  declarations: [
    AppComponent,
    BugsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    BugsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
