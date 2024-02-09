import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUserComponent } from './registrationuser.component';
import { UserlistComponent } from '../userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { RegistrationComponent } from '../registration/registration.component';

describe('Registration User form Component Test', () => {
  let component: RegistrationUserComponent;
  let fixture: ComponentFixture<RegistrationUserComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [RegistrationUserComponent],
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
    it('To test the user Registration component created', () => {
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Registration User Component'`, () => {
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Registration User Component');
    });
  
    it('Registration User form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Registration User form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(9);
    });

    it('Registration User form initial value',() => {
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.userform
      const myFormValues = {
       userid : '',
       username : '',
       email : '',
       address : '',
       gender : '',
       profession : '',
       password : ''
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('Registration User form valid by Valid data',() => {
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const app = fixture.componentInstance;
      app.userform.controls?.['userid'].setValue("100");
      app.userform.controls?.['username'].setValue("PravinKumar");
      app.userform.controls?.['email'].setValue("rjpravin123456789@gmail.com");
      app.userform.controls?.['address'].setValue("Bengaluru");
      app.userform.controls?.['gender'].setValue("Male");
      app.userform.controls?.['profession'].setValue("CSE");
      app.userform.controls?.['password'].setValue("PravinKumar@11946");
      expect(app.userform.valid).toBeTruthy();
    });

    it('Registration user form valid by invalid data',() => {
      const fixture = TestBed.createComponent(RegistrationUserComponent);
      const app = fixture.componentInstance;
      app.userform.controls?.['userid'].setValue("");
      app.userform.controls?.['username'].setValue("");
      app.userform.controls?.['email'].setValue("");
      app.userform.controls?.['address'].setValue("");
      app.userform.controls?.['gender'].setValue("");
      app.userform.controls?.['profession'].setValue("");
      app.userform.controls?.['password'].setValue("");
      expect(app.userform.valid).toBeTruthy();
    });
  });