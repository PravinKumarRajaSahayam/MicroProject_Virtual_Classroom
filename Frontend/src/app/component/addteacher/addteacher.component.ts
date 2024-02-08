import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {

  user = new User();
  teacher = new Teacher();
  msg = ' ';
  
  constructor(private _Service : AdminService, private _teacherService : TeacherService, private _router : Router) { }

  ngOnInit(): void {
  }

  addTeacher()
  {
    this._Service.addTeacher(this.teacher).subscribe(
      data => {
        console.log("Teacher added Successfully !!!");
        this._router.navigate(['/admindashboard']);
      },
      error => {
        console.log("Process Failed");
        console.log(error.error);
        this.msg = "Teacher with "+this.teacher.email+" already exists !!!";
      }
    )
  }
  registerUser()
  {

  }

}
