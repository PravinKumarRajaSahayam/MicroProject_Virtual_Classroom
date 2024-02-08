import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher} from 'src/app/models/teacher';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  teacher = new Teacher();
  msg = "";
  adminEmail = "";
  adminPassword = "";
  
  constructor(private _service : LoginService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".admin-login-form").show();
    $("#adminbtn").css("", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");

    $("#adminbtn").click(function(){
      $(".admin-login-form").show();
      $("#adminbtn").css("border", "0").css("opacity", "1");
      });
    
    $(".adminlogin").click(function(){
      $(".admin-login-form").show();
    });
  }

  adminLogin()
  {
    if(this._service.adminLoginFromRemote(this.adminEmail, this.adminPassword)) 
    {
      sessionStorage.setItem('loggedUser', this.adminEmail);
      sessionStorage.setItem('USER', "admin");
      sessionStorage.setItem('ROLE', "admin");
      sessionStorage.setItem('name', "admin");
      sessionStorage.setItem('gender', "male");
      this._router.navigate(['/admindashboard']);
    }
    else 
    {
      console.log("Exception Occured");
      this.msg = 'Bad admin credentials !!!'
    }
  }


}
