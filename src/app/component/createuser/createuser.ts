import { Component } from '@angular/core';
import { CreateUserDto } from './createuser.dto';
import { Userservice } from '../../services/users/userservice';

@Component({
  selector: 'app-createuser',
  standalone: false,
  templateUrl: './createuser.html',
  styleUrl: './createuser.css',
})
export class Createuser {
  user : CreateUserDto= {
    name: '',
    email: '',
    password: '',
    role: 'user',
  };
  constructor (private userservice: Userservice) {};


  createUser() {
    this.userservice.createUser(this.user)
    .subscribe({
      next: (res) => console.log('User Created',res),
      error: (err) => console.log('Error while creating User',err)
      
    })
    
  }
}
