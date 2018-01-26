import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class LinkService {

  constructor(private http: Http) {
  }

  getShortUrl(url, sessionId) {
    console.log('in service ', 'url', url,' session ',sessionId)
    var headers = new Headers();
    var urlObj = {
      url: url,
      userSession: sessionId
    }
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/link/getshorturl', urlObj, {headers: headers})
      .map(res => res.json());
  }

  getSessionId() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/link/getSessionId', {headers: headers})
      .map(res => res.json());
  }

  getAllUrls(currentSessionId) {
    console.log('in service now');
    var sessionObj = {
      sessionId: currentSessionId
    }
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/link/getAllUserUrl', sessionObj, {headers: headers})
      .map(res => res.json());
  }

}
