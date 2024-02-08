import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationusersuccess',
  templateUrl: './registrationusersuccess.component.html',
  styleUrls: ['./registrationusersuccess.component.css']
})
export class RegistrationusersuccessComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void 
  {
    setTimeout(() => {
      this.router.navigate(['loginUser']);
  }, 7000);
  }

}
