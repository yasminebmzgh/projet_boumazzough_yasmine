import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', {
      login: login,
      password: password,
    });
  }
}
