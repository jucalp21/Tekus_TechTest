import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { Observable} from 'rxjs';
import { CookieService } from "ngx-cookie-service";

const env = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) { }


  login(user: any): Observable<any> {
    return this.http.post(`${env}account/login`, user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

}
