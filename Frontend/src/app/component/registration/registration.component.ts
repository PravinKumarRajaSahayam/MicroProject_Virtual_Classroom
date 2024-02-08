import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { User } from 'src/app/models/user';
import { TeacherService } from 'src/app/services/teacher.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  teacher = new Teacher();
  msg = ' ';

  constructor(private _registrationService : RegistrationService, private _teacherService : TeacherService, private _router : Router) { }

  ngOnInit(): void 
  {
    $(".nav1").addClass("highlight1")
    $("#home-tab").click(function(){
      $("#profile").hide();
      $("#home").show();
      $(".nav1").addClass("highlight1")
      $(".nav2").removeClass("highlight2")
    });
    $("#profile-tab").click(function(){
      $("#home").hide();
      $("#profile").show();
      $(".nav2").addClass("highlight2")
      $(".nav1").removeClass("highlight1")
    });
  }

  registerUser()
  {
    this._registrationService.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("username",this.user.username);
        sessionStorage.setItem("gender",this.user.gender);
        this._router.navigate(['/registrationsuccess']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "User with "+this.user.email+" already exists !!!";
      }
    )
  }

  registerTeacher()
  {
    this._registrationService.registerTeacherFromRemote(this.teacher).subscribe(
      data => {
        console.log("Registration Success");
        sessionStorage.setItem("doctorname",this.teacher.teachername);
        sessionStorage.setItem("gender",this.teacher.gender);
        this._router.navigate(['/registrationsuccess']);
      },
      error => {
        console.log("Registration Failed");
        console.log(error.error);
        this.msg = "Teacher with "+this.teacher.email+" already exists !!!";
      }
    )
  }

}