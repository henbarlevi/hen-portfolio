import { Component } from '@angular/core';
import { EmailService } from './shared/email.service';
import { GlobalVarsService } from './shared/global-vars.service';
import { DownloadCvService } from './shared/download-cv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  contactInfo = {};

  contactResponse = '';
  constructor(private emailSrvice: EmailService,
    private DownloadCvService: DownloadCvService) {

  }
  onContactSubmit() {
    console.log(this.contactInfo);
    this.contactResponse = 'sending..';
    this.emailSrvice.sendEmail(this.contactInfo).then(res => {
      console.log(res)
      if (res.ok) {
        this.contactResponse = 'Message Sent';
      }
      else {
        this.contactResponse = 'sorry, somthing happened'
      }
    });
  }
  onDownloadCv() {
    this.DownloadCvService.downloadFile();
  }
}
