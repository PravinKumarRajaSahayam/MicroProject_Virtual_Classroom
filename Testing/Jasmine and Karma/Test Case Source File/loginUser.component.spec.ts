import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserComponent } from './loginUser.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { LoginTeacherComponent } from '../loginTeacher/loginTeacher.component';

describe('Login User form Component Test', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LoginUserComponent],
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
    it('To test the Login user component created', () => {
      const fixture = TestBed.createComponent(LoginUserComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'User Login Component'`, () => {
      const fixture = TestBed.createComponent(LoginUserComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('User login Component');
    });
  
    it('User Login form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(LoginUserComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('User Login form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(LoginUserComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(3);
    });

    it('User Login form initial value',() => {
      const fixture = TestBed.createComponent(LoginUserComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.userform
      const myFormValues = {
        email : '',
        password : ''
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('User Login form valid by Valid data',() => {
      const fixture = TestBed.createComponent(LoginUserComponent);
      const app = fixture.componentInstance;
      app.userform.controls?.['email'].setValue("praivnkumar123@gmail.com");
      app.userform.controls?.['password'].setValue("PravinKumar@11946");
      expect(app.userform.valid).toBeTruthy();
    });

    it('User Login form valid by invalid data',() => {
      const fixture = TestBed.createComponent(LoginUserComponent);
      const app = fixture.componentInstance;
      app.userform.controls?.['email'].setValue("");
      app.userform.controls?.['password'].setValue("");
      expect(app.userform.valid).toBeTruthy();
    });
  });