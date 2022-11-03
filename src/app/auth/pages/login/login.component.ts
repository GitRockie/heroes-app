import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    mat-card {
      max-width: 400px;
      margin: 2em auto;
      text-align: center;
    }

    mat-form-field {
      display: block;
    }

  
  `
  ]
})
export class LoginComponent{

  miFormulario: FormGroup = this.fb.group({
    email:    ['test1@test.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
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
