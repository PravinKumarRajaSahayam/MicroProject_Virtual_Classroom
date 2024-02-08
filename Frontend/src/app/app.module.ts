import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginTeacherComponent } from './components/loginTeacher/loginTeacher.component';
import { LoginUserComponent } from './components/loginUser/loginUser.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationsuccessComponent } from './components/registrationsuccess/registrationsuccess.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { TeacherdashboardComponent } from './components/teacherdashboard/teacherdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TeacherprofileComponent } from './components/teacherprofile/teacherprofile.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';
import { ApprovalstatusComponent } from './components/approvalstatus/approvalstatus.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { TeacherlistComponent } from './components/teacherlist/teacherlist.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FullcourseComponent } from './components/fullcourse/fullcourse.component';
import { AddchapterComponent } from './components/addchapter/addchapter.component';
import { MycoursesComponent } from './components/mycourses/mycourses.component';
import { MywishlistComponent } from './components/mywishlist/mywishlist.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { ChooseComponent } from './components/choose/choose.component';
import { RegistrationUserComponent } from './components/registrationuser/registrationuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationUserComponent,
    RegistrationsuccessComponent,
    UserdashboardComponent,
    TeacherdashboardComponent,
    AdmindashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserprofileComponent,
    TeacherprofileComponent,
    AddteacherComponent,
    ApprovalstatusComponent,
    AddcourseComponent,
    UserlistComponent,
    TeacherlistComponent,
    CourselistComponent,
    FullcourseComponent,
    AddchapterComponent,
    MycoursesComponent,
    MywishlistComponent,
    WelcomepageComponent,
    ChooseComponent,
    LoginTeacherComponent,
    LoginUserComponent,
    RegistrationUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    YouTubePlayerModule
    // MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, RegistrationComponent]
})
export class AppModule { }
