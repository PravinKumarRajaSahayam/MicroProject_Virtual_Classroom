import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { RegistrationUserComponent } from '../registrationuser/registrationuser.component';

describe('Login Admin form Component Test', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LoginComponent],
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
    it('To test the Login Admin component created', () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Admin Login Component'`, () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Admin login Component');
    });
  
    it('Admin Login form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(LoginComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Admin Login form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(LoginComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(2);
    });

    it('Admin Login form initial value',() => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.adminform
      const myFormValues = {
        email : '',
        password : ''
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('Admin Login form valid by Valid data',() => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      app.adminform.controls?.['email'].setValue("admin@gmail.com");
      app.adminform.controls?.['password'].setValue("admin123");
      expect(app.adminform.valid).toBeTruthy();
    });

    it('Admin Login form valid by invalid data',() => {
      const fixture = TestBed.createComponent(LoginComponent);
      const app = fixture.componentInstance;
      app.adminform.controls?.['email'].setValue("");
      app.adminform.controls?.['password'].setValue("");
      expect(app.adminform.valid).toBeTruthy();
    });
  });