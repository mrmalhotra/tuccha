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
  shortenUrl:string = '';

  urlArray:string[] = [];
  baseUrl:string;
  // process.env.BASE_URL;
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
    this.getEnv();

  }

  getMeUrl(){
    console.log('url is ',this.url);
    if(this.url !=undefined){
      console.log('is not undefined')
      this.linkService.getShortUrl(this.url,this.sessionId).subscribe(shortUrl=>{
        console.log('value while sub ',shortUrl)
        if(shortUrl.success){
          console.log('got the shortUrl', shortUrl);
          this.shortenUrl = shortUrl.url.shortenUrl;
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
      console.log('got all urls ',urls.shortUrl[0])
      for(let a=0;a<urls.shortUrl.length;a++){
        // console.log('check value 'urls.shortUrl[a].shortenUrl)
        this.urlArray[a] = urls.shortUrl[a];
      }
      console.log('chekc the array ',this.urlArray)
    },(error)=>{
      console.log('got some error in getting url ',error);
    })
  }

  getEnv(){

    this.linkService.getEnvVariable().subscribe(env =>{
      console.log('got env',env);
      this.baseUrl = env.result;
    },(error)=>{
      console.log('got some error in getting env ',error);
    })
  }
}
