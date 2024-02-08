import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher} from 'src/app/models/teacher';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-loginTeacher',
  templateUrl: './loginTeacher.component.html',
  styleUrls: ['./loginTeacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

  user = new User();
  teacher = new Teacher();
  msg = "";
  adminEmail = "";
  adminPassword = "";
  
  constructor(private _service : LoginService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".teacher-login-form").show();
    $("#teacherbtn").css("", "1.5px solid rgb(6, 50, 53)").css("border-left", "1.5px solid rgb(6, 50, 53)").css("opacity", "0.3");

    $("#userbtn").click(function(){
      $(".teacher-login-form").show();
      $("#teacherbtn").css("border", "0").css("border-bottom", "1.5px solid rgb(6, 50, 53)").css("border-left", "1.5px solid rgb(6, 50, 53)").css("opacity", "1").css("opacity", "0.3");
    });

    $("#teacherbtn").click(function(){
      $(".teacher-login-form").show();
      $("#teacherbtn").css("border", "0").css("opacity", "1");
    });

  }

  loginTeacher()
  {
      this._service.loginTeacherFromRemote(this.teacher).subscribe(
        (data: any) => {
          console.log(data);
          console.log("Response Received");
          sessionStorage.clear();
          sessionStorage.setItem('loggedUser', this.teacher.email);
          sessionStorage.setItem('USER', "teacher");
          sessionStorage.setItem('ROLE', "teacher");
          sessionStorage.setItem('teachername',this.teacher.email);
          sessionStorage.setItem('gender', "male");
          this._router.navigate(['/teacherdashboard']);
        },
        (error: { error: any; }) => {
          console.log(error.error);
          this.msg="Bad credentials, please enter valid credentials !!!";
        }
      )
  }
}
