import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Userservice } from '../../services/users/userservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users :any[] = [];
  constructor(private userservice: Userservice, private router: Router){ }
  
  getUsers(){
    this.userservice.getallUsers().subscribe((data: any[]) =>{
      this.users = data;
    });
  }
  
  tasks(){
    this.router.navigate(['/tasklist']); 
  }
  
}
