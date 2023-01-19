import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })
  constructor(private authservice:AuthenticationService, private router :Router, private toast:HotToastService) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password')
  }

  submit(){
    if (!this.loginForm.valid){
      return;
    }
    const {email,password}= this.loginForm.value;
    this.authservice.login(email,password).pipe(
      this.toast.observe({
        success:'logged in successfully',
        loading: 'Logging in',
        error: 'There was an error'
      })
      ).subscribe(()=>{
      this.router.navigate(['/admin']);
    });
  }
}
