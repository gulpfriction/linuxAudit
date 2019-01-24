import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowResultPage } from '../../pages/show-result/show-result';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  hostnameURL:any
  showResult = ShowResultPage;
   url: string;
  constructor(public navCtrl: NavController, public restService: RestServiceProvider) {
    this.hostnameURL = '';
  }

  showResultPage() {
    this.navCtrl.push(ShowResultPage);
  } 
  
  formatHostname() {
    this.hostnameURL = "http://" + this.hostnameURL + ":8080/api";
    this.readTargetURL();
    this.showResultPage();
  }

  isTextBoxBlank() {
    if (this.hostnameURL != null) {
      if (this.hostnameURL.length == 0)
        return false;
      return true;
    } 
    return false;
  }

  readTargetURL() {
    this.restService.BaseURL = this.hostnameURL;
  }

}
