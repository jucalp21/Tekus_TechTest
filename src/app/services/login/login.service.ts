import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment/environment';
import { Observable} from 'rxjs';
import { CookieService } from "ngx-cookie-service";

const ENV = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private cookies: CookieService) { }


  login(user: any): Observable<any> {
    return this.http.post(`${ ENV }/account/login`, user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

}
