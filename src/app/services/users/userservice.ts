import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDto } from '../../component/createuser/createuser.dto';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  private baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getallUsers() {
    return this.http.get<any[]>(`${this.baseUrl}/all`,{})
  }
  
  createUser(user: CreateUserDto){
    return this.http.post(`${this.baseUrl}/createuser`,user)
  }
  

}
