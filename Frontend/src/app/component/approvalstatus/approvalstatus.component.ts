import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models/teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-approvalstatus',
  templateUrl: './approvalstatus.component.html',
  styleUrls: ['./approvalstatus.component.css']
})
export class ApprovalstatusComponent implements OnInit {

  currRole = '';
  loggedUser = '';
  approval : Observable<Teacher[]> | undefined;
  teacherlist : Observable<Teacher[]> | undefined;
  responses : Observable<any> | undefined;

  constructor(private _service : TeacherService) { }

  ngOnInit(): void 
  {
    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.teacherlist = this._service.getTeacherList();
    this.approval = this._service.getTeacherListByEmail(this.loggedUser);

    if(this.currRole === 'teacher' || this.currRole === 'TEACHER')
    {
      $("#adminapproval").hide();
      $("#teacherapproval").show();
    }
    else if(this.currRole === 'admin' || this.currRole === 'ADMIN' && this.loggedUser === 'admin@gmail.com')
    {
      $("#adminapproval").show();
      $("#teacherapproval").hide();
    }
  }

  acceptRequest(curremail : string)
  {
    this.responses = this._service.acceptRequestForTeacherApproval(curremail);
    $("#acceptbtn").hide();
    $("#rejectbtn").hide();
    $("#acceptedbtn").show();
    $("#rejectedbtn").hide();
  }

  rejectRequest(curremail : string)
  {
    this.responses = this._service.rejectRequestForTeacherApproval(curremail);
    $("#acceptbtn").hide();
    $("#rejectbtn").hide();
    $("#acceptedbtn").hide();
    $("#rejectedbtn").show();
  }

}
