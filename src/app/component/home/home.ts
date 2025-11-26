import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/authservice';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  username :string | null = null;
  
  constructor(private authservice: AuthService){ }
  ngOnInit(): void {
    this.username = this.authservice.getUserName();
  }
  
}
