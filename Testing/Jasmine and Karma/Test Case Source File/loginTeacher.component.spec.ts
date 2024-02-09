import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTeacherComponent } from './loginTeacher.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

describe('Login Teacher form Component Test', () => {
  let component: LoginTeacherComponent;
  let fixture: ComponentFixture<LoginTeacherComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LoginTeacherComponent],
        imports:[HttpClientModule,
          ReactiveFormsModule,
          BrowserModule,
          AppRoutingModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule,
          ReactiveFormsModule,
          FormsModule,
          HttpClientModule
        ],
        providers:[
          RegistrationService,LoginService,AdminService,TeacherService,UserService
        ]
      }).compileComponents();
    });
    it('To test the Login Teacher component created', () => {
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Teacher Login Component'`, () => {
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Teacher login Component');
    });
  
    it('Teacher Login form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Teacher Login form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(3);
    });

    it('Teacher Login form initial value',() => {
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.teacherform
      const myFormValues = {
        email : '',
        password : ''
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('Teacher Login form valid by Valid data',() => {
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const app = fixture.componentInstance;
      app.teacherform.controls?.['email'].setValue("anitha123@gmail.com");
      app.teacherform.controls?.['password'].setValue("Anitha%23");
      expect(app.teacherform.valid).toBeTruthy();
    });

    it('Teacher Login form valid by invalid data',() => {
      const fixture = TestBed.createComponent(LoginTeacherComponent);
      const app = fixture.componentInstance;
      app.teacherform.controls?.['email'].setValue("");
      app.teacherform.controls?.['password'].setValue("");
      expect(app.teacherform.valid).toBeTruthy();
    });
  });