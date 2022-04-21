import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent{
  
  public formSubmitted = false;

  public registerform = this.fb.group({
    email: ['test1@gmail.com', [Validators.required, Validators.email] ],
    password: [ '12345', Validators.required ]
  });

  constructor( private router: Router,
               private authService: AuthService,
               private fb: FormBuilder) { }

  login() {

    this.authService.login()
      .subscribe( resp => {
        console.log(resp);

        if(resp.id){
          this.router.navigate(['./heroes']);
        }
      })
    
  }

  noLoginEnter() {
    this.authService.logOut();
    this.router.navigate(['./heroes']);
  }


}
