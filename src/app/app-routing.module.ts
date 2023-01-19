import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, canActivate, redirectLoggedInTo,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';


const redirectToLogin = ()=> redirectUnauthorizedTo(['login']);
const redirectToHome = ()=>redirectLoggedInTo(['admin']);

const routes: Routes = [
  {
     path: '',
     pathMatch:'full',
     component:LandingComponent
     
  },
  {
    path:'login',
    component:LoginComponent,
    ...canActivate(redirectToHome)
  },
  
//   {path:'home',
//   component:HomeComponent,
//   ...canActivate(redirectToLogin)
// },

  {
    path:'signup',
    component:SignupComponent,
    ...canActivate(redirectToLogin)
   
  },
  {path:'admin',
  
    loadChildren:()=> import('./module/admin/admin.module').then((m)=>m.AdminModule) , 
},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
