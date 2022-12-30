import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environment/environment';
import { Observable} from 'rxjs';

const ENV = environment.apiURL;


@Injectable({
  providedIn: 'root'
})
export class ListSubsService {

  constructor(private http: HttpClient) { }

  getSubs(query?: any): Observable<any> {
    return this.http.get(`${ ENV }/subscribers/?${ query }`);
  }

  deleteSub(id: any): Observable<any> {
    return this.http.delete(`${ ENV }/subscribers/${ id }`);
  }

  addSub(sub: any): Observable<any> {
    console.log(sub);
    return this.http.post(`${ ENV }/subscribers/`, sub);
  }

}
