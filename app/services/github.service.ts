import { Injectable }  from '@angular/core';
import { Http, Headers }  from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  
  private username: string;
  private client_id = '0785e79404ae667d35f1';
  private client_secret = 'b27af0b22ef4bf55e8f75fd114e5609b83975dcf';
  
  constructor(private _http: Http) {
    console.log('GHService ready');
    this.username = 'mbowen13';
  }
  
  getUser() {
    var URL = 'http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
    console.log(URL);
    return this._http.get(URL)
    .map(res => res.json());
  }
}
