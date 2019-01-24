import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { RestServiceProvider } from '../../providers/rest-service/rest-service';
//import { ApiRouterProvider } from '../../providers/api-router/api-router';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-show-result',
  templateUrl: 'show-result.html',
})
export class ShowResultPage {

  dataList = [];
  constructor(private navCtrl: NavController, private RestServiceProvider: RestServiceProvider) {
    this.getData();

  }

  getData(){
    this.RestServiceProvider.getData().subscribe(data => this.dataList = Array.of(data));
  }


  homePage() {
      this.navCtrl.setRoot(HomePage); 

  }

}
