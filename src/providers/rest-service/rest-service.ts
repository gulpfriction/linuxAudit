import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from '../../../node_modules/rxjs/Observable';
/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {
  BaseURL : any;
   
  constructor( private http: Http) {
    console.log('Hello RestServiceProvider Provider');
  }
  createHeader(headers: Headers) {
    //headers.append('X-Session-Token', 'OTAgOTAgOTAgLjk+Jkc1==');
    headers.append('X-Session-Token', 'abcd');
  }
  
getData(){
  let headers = new Headers();
    this.createHeader(headers);
  
    console.log(this.BaseURL);
    let targetURL = this.BaseURL + "/system/conf/sshd"

     return this.http.get(targetURL, {
    headers: headers })
  .do(this.logResponse)
  .map(this.extractData)
  .catch(this.catchError)
}


private catchError(error: Response | any){
  console.log(error);
  return Observable.throw(error.json().error || "Server error.");
}



private logResponse(res: Response){
  console.log(res);
}

private extractData(res: Response){
  return res.json();
}
}
