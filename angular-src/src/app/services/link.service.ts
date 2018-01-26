import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class LinkService {

  constructor(private http: Http) { }

  getShortUrl(url){
    console.log('in service ',url)
    var headers= new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/link/getshorturl',url,{headers:headers})
      .map(res=>res.json());
  }

}
