import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/Services/authentication.service';

export function passwordsMatchValidator():ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null=>{
    const password=control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value
    if(password&&confirmPassword&&password!==confirmPassword){
      return {
        passwordsDontMatch:true

      }
    }
    return null;
  }

}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required)
  },{validators: passwordsMatchValidator()})
  constructor(private authservice:AuthenticationService, private toast:HotToastService, private router:Router) { }

  ngOnInit(): void {
  }
  get name(){
    return this.signUpForm.get('name');
  }
  get email(){
    return this.signUpForm.get('email');
  }
  get password(){
    return this.signUpForm.get('password');
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }
 submit(){
  if(!this.signUpForm.valid)
  {
    return;
  }

  const {name,email,password}= this.signUpForm.value;

  this.authservice.signUp(name,email,password).pipe(
    this.toast.observe({
      success: 'Congrats! You are all signed up',
      loading:'Signing in',
      // error: 'There was an error'
      error:({ message })=>`${message}`
    })
  ).subscribe(()=>{
    this.router.navigate(['/home']);
  })

 }
}
