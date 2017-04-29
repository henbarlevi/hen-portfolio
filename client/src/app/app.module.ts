import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GlobalVarsService} from './shared/global-vars.service';
import {EmailService } from './shared/email.service';
import { DownloadCvService} from './shared/download-cv.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmailService,GlobalVarsService,DownloadCvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
