import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ENV = environment;

  constructor(
    public http: Http
  ){ }
  
  getUser(callback){
      
    this.http.get(this.ENV.url_servidor+'/users',{}).subscribe((result: any) => {
        console.log(result);
        callback(result);
    },(error) => {
        console.log(error);
        callback(false);
    });   

  }
}
