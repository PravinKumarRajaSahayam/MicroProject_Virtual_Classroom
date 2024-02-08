import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';
import { LoginComponent } from './components/login/login.component';
import { LoginTeacherComponent } from './components/loginTeacher/loginTeacher.component';
import { LoginUserComponent } from './components/loginUser/loginUser.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { TeacherlistComponent } from './components/teacherlist/teacherlist.component';
import { TeacherprofileComponent } from './components/teacherprofile/teacherprofile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { RegistrationusersuccessComponent } from './components/registrationusersuccess/registrationusersuccess.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AdminGuard } from './guards/admin.guard';
import { TeacherGuard } from './guards/teacher.guard';
import { RouterGuard } from './guards/router.guard';
import { UserGuard } from './guards/user.guard';
import { ChooseComponent } from './components/choose/choose.component';
import { RegistrationUserComponent } from './components/registrationuser/registrationuser.component';

const routes: Routes = [
  {path:'',component:WelcomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'loginTeacher',component:LoginTeacherComponent},
  {path:'loginUser',component:LoginUserComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'registrationuser',component:RegistrationUserComponent},
  {path:'registrationsuccess',component:RegistrationsuccessComponent},
  {path:'registrationusersuccess',component:RegistrationusersuccessComponent},
  {path:'admindashboard',component:AdmindashboardComponent,canActivate:[AdminGuard]},
  {path:'userdashboard',component:UserdashboardComponent,canActivate:[UserGuard]},
  {path:'teacherdashboard',component:TeacherdashboardComponent,canActivate:[TeacherGuard]},
  {path:'addTeacher',component:AddteacherComponent,canActivate:[AdminGuard]},
  {path:'choose',component:ChooseComponent},
  {path:'addCourse',component:AddcourseComponent,canActivate:[RouterGuard]},
  {path:'approveteacher',component:ApprovalstatusComponent,canActivate:[RouterGuard]},
  {path:'teacherlist',component:TeacherlistComponent,canActivate:[RouterGuard]},
  {path:'userlist',component:UserlistComponent,canActivate:[RouterGuard]},
  {path:'courselist',component:CourselistComponent,canActivate:[RouterGuard]},
  {path:'addchapter',component:AddchapterComponent,canActivate:[RouterGuard]},
  {path:'fullcourse/:coursename',component:FullcourseComponent,canActivate:[RouterGuard]},
  {path:'editteacherprofile',component:TeacherprofileComponent,canActivate:[TeacherGuard]},
  {path:'edituserprofile',component:UserprofileComponent,canActivate:[UserGuard]},
  {path:'mywishlist',component:MywishlistComponent,canActivate:[RouterGuard]},
  {path:'mycourses',component:MycoursesComponent,canActivate:[RouterGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
