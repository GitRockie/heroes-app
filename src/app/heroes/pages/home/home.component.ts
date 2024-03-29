import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interface/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  get auth() {
    return this.authservice.auth;
  }

  constructor( private router: Router,
               private authservice: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['./auth'])
  }


}
