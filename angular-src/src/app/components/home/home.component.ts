import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {LinkService} from "../../services/link.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url:string;
  shortenUrl:string ='';

  constructor(private http: Http,
              private linkService: LinkService) { }

  ngOnInit() {
  }

  getMeUrl(){
    console.log('url is ',this.url);
    if(this.url !=undefined){
      console.log('is not undefined')
      this.linkService.getShortUrl(JSON.stringify(this.url)).subscribe(shortUrl=>{
        console.log('got the shortUrl', shortUrl)
        this.shortenUrl = shortUrl.url.shortenUrl;
      },function (error) {
        console.log('error is ',error)
      })
    }
  }
}
