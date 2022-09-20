import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { configService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: Http,
    public config : configService
  ){ }
  
  getUser(callback){
      
    this.http.get(this.config.url_servidor+'/users',{}).subscribe((result: any) => {
        console.log(result);
        callback(result);
    },(error) => {
        console.log(error);
        callback(false);
    });   

  }
}
