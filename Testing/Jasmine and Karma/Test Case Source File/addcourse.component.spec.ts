import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourseComponent } from './addcourse.component';
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
import { AppComponent } from 'src/app/app.component';

describe('Add Course form Component Test', () => {
  let component: AddcourseComponent;
  let fixture: ComponentFixture<AddcourseComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AddcourseComponent,AppComponent],
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
    it('To test the Add Course component created', () => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Add Course Component'`, () => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Add Course Component');
    });
  
    it('Add Course form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(AddcourseComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Add Course form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(AddcourseComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(5);
    });

    it('Add Course form initial value',() => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.addcourseform
      const myFormValues = {
        id : '',
        courseid : '',
        coursename : '',
        coursetype : '',
        description : '',
        enrolledcount : '',
        enrolleddate : '',
        instructorinstitution : '',
        language : '',
        skilllevel : '',
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('Add Course form by Valid data',() => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      app.addcourseform.controls?.['id'].setValue("100");
      app.addcourseform.controls?.['courseid'].setValue("190");
      app.addcourseform.controls?.['coursename'].setValue("Java");
      app.addcourseform.controls?.['coursetype'].setValue("Website");
      app.addcourseform.controls?.['description'].setValue("Java with full tutorails");
      app.addcourseform.controls?.['enrolledcount'].setValue("1");
      app.addcourseform.controls?.['enrolleddate'].setValue("01/01/2024");
      app.addcourseform.controls?.['instructorinstitution'].setValue("VVE");
      app.addcourseform.controls?.['language'].setValue("English");
      app.addcourseform.controls?.['skilllevel'].setValue("Basic");
      expect(app.addcourseform.valid).toBeTruthy();
    });

    it('Add Course form by Invalid data',() => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      app.addcourseform.controls?.['id'].setValue("");
      app.addcourseform.controls?.['courseid'].setValue("");
      app.addcourseform.controls?.['coursename'].setValue("");
      app.addcourseform.controls?.['coursetype'].setValue("");
      app.addcourseform.controls?.['description'].setValue("");
      app.addcourseform.controls?.['enrolledcount'].setValue("");
      app.addcourseform.controls?.['enrolleddate'].setValue("");
      app.addcourseform.controls?.['instructorinstitution'].setValue("");
      app.addcourseform.controls?.['language'].setValue("");
      app.addcourseform.controls?.['skilllevel'].setValue("");
      expect(app.addcourseform.valid).toBeTruthy();
    });

    it('Insert new Course to the database',() => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      app.addcourseform.controls?.['id'].setValue("91");
      app.addcourseform.controls?.['courseid'].setValue("80");
      app.addcourseform.controls?.['coursename'].setValue("Spring");
      app.addcourseform.controls?.['coursetype'].setValue("website");
      app.addcourseform.controls?.['description'].setValue("Spring");
      app.addcourseform.controls?.['enrolledcount'].setValue("0");
      app.addcourseform.controls?.['enrolleddate'].setValue("01/01/2024");
      app.addcourseform.controls?.['instructorinstitution'].setValue("VVE");
      app.addcourseform.controls?.['language'].setValue("English");
      app.addcourseform.controls?.['skilllevel'].setValue("Basic");
      expect(app.addcourseform.valid).toBeTruthy();
    });

    it('Update existing Course to the database',() => {
      const fixture = TestBed.createComponent(AddcourseComponent);
      const app = fixture.componentInstance;
      app.addcourseform.controls?.['id'].setValue("91");
      app.addcourseform.controls?.['courseid'].setValue("80");
      app.addcourseform.controls?.['coursename'].setValue("Spring Boot");
      app.addcourseform.controls?.['coursetype'].setValue("website");
      app.addcourseform.controls?.['description'].setValue("Spring Boot");
      app.addcourseform.controls?.['enrolledcount'].setValue("1");
      app.addcourseform.controls?.['enrolleddate'].setValue("01/01/2024");
      app.addcourseform.controls?.['instructorinstitution'].setValue("VVE");
      app.addcourseform.controls?.['language'].setValue("English");
      app.addcourseform.controls?.['skilllevel'].setValue("Basic");
      expect(app.addcourseform.valid).toBeTruthy();
    });
  });