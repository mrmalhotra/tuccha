import { Component, OnInit } from '@angular/core';
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
  sessionId: string;
  shortenUrl:string;
  // urlArray:any;
  baseUrl:string = process.env.BASE_URL;

  constructor(private http: Http,
              private linkService: LinkService) { }

  ngOnInit() {
    if(!localStorage.getItem('sessionId')){
      this.linkService.getSessionId().subscribe(session=>{
        console.log('got new session id',session)
        localStorage.setItem('sessionId',session.sessionId);
        this.sessionId = session.sessionId;
      })
    }else{
      this.sessionId = localStorage.getItem('sessionId');
      console.log('got the session id from storage ',this.sessionId);
      this.getSessions();
    }

  }

  getMeUrl(){
    console.log('url is ',this.url);
    if(this.url !=undefined){
      console.log('is not undefined')
      this.linkService.getShortUrl(JSON.stringify(this.url),this.sessionId).subscribe(allUrls=>{
        console.log('value while sub ',allUrls)
        if(allUrls.success){
          console.log('got the shortUrl', allUrls);
          this.shortenUrl = allUrls.url.shortenUrl;
        }else{
          this.shortenUrl = ''
        }

      },function (error) {
        console.log('error is ',error)
      });
    }
  }

  getSessions(){
    console.log("i am in getSession call")
    this.linkService.getAllUrls(this.sessionId).subscribe(urls =>{
      console.log('got all urls ',urls.shortUrl)
      // for(let i=0;i<urls.shortUrl.length;i++){
      //   this.urlArray.push(urls.shortUrl[i].shortenUrl)
      //   // console.log('list is ',urls.shortUrl[i])
      // }

    },(error)=>{
      console.log('got some error in getting url ',error);
    })
  }
}
