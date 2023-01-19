import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$ = this.authservice.currentUser$;
  constructor(private authservice:AuthenticationService,private router :Router) { }

  ngOnInit(): void {
  }
toadd(){
  this.router.navigate(['/admin/add']);
}

}
