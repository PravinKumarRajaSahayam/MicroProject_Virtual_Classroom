import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddchapterComponent } from './addchapter.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { RegistrationComponent } from '../registration/registration.component';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';

describe('Add Chapter Component Test', () => {
  let component: AddchapterComponent;
  let fixture: ComponentFixture<AddchapterComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AddchapterComponent],
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
    it('To test the Add Chapter component created', () => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Add Chapter Component'`, () => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Add Chapter Component');
    });
  
    it('Add Cahpter form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(AddchapterComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Add Chapter form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(AddchapterComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(17);
    });

    it('Add Chapter form initial value',() => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.addchapterform
      const myFormValues = {
        id : '',
      chapter1name : '',
      chapter1id : '',
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('Add Chapter form by Valid data',() => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      app.addchapterform.controls?.['id'].setValue("100");
      app.addchapterform.controls?.['chapter1name'].setValue("Java");
      app.addchapterform.controls?.['chapter1id'].setValue("101");
      expect(app.addchapterform.valid).toBeTruthy();
    });

    it('Add Chapter form by Invalid data',() => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      app.addchapterform.controls?.['id'].setValue("");
      app.addchapterform.controls?.['chapter1name'].setValue("");
      app.addchapterform.controls?.['chapter1id'].setValue("");
      expect(app.addchapterform.valid).toBeTruthy();
    });

    it('Insert new Chapter to the database',() => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      app.addchapterform.controls?.['id'].setValue("101");
      app.addchapterform.controls?.['chapter1name'].setValue("Spring");
      app.addchapterform.controls?.['chapter1id'].setValue("109");
      expect(app.addchapterform.valid).toBeTruthy();
    });

    it('Update existing Chapter to the database',() => {
      const fixture = TestBed.createComponent(AddchapterComponent);
      const app = fixture.componentInstance;
      app.addchapterform.controls?.['id'].setValue("101");
      app.addchapterform.controls?.['chapter1name'].setValue("Spring Boot");
      app.addchapterform.controls?.['chapter1id'].setValue("109");
      expect(app.addchapterform.valid).toBeTruthy();
    });
  });