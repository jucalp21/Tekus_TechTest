import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.loginService.getToken();
    const headers = new HttpHeaders({'Authorization': `jwttoken ${ token }`});
    const reqClone = request.clone({ headers });

    console.log('in interceptor')

    return next.handle(reqClone);
  }
}
