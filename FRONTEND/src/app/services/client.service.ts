import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  

  postNewClient(client: User): Observable<User> {
    console.log("post");
    return this.http.post<User>(this.apiUrl+"/signup", client);
  }
}
