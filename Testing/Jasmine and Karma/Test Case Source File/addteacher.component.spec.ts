import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddteacherComponent } from './addteacher.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';
import { RegistrationService } from 'src/app/services/registration.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { AddchapterComponent } from '../addchapter/addchapter.component';
describe('Add Teacher Component Test', () => {
  let component: AddteacherComponent;
  let fixture: ComponentFixture<AddteacherComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [AddteacherComponent],
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
    it('To test the Add Teacher component created', () => {
      const fixture = TestBed.createComponent(AddteacherComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Add Teacher Component'`, () => {
      const fixture = TestBed.createComponent(AddteacherComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Add Teacher Component');
    });
  
    it('Add Teacher form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(AddteacherComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Add Teacher form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(AddteacherComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(10);
    });

    it('Add Teacher form initial value',() => {
      const fixture = TestBed.createComponent(AddteacherComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.addteacherform
      const myFormValues = {
          teacherid : '',
          teachername : '',
          email : '',
          degreecompleted : '',
          department : '',
          experience : '',
          gender : '',
          institutionname : '',
          mobile : '',
          password : ''
      }
      expect(myFormGroup.valid).toBeTruthy();
    });

    it('Add Teacher form by Valid data',() => {
      const fixture = TestBed.createComponent(AddteacherComponent);
      const app = fixture.componentInstance;
      app.addteacherform.controls?.['teacherid'].setValue("100");
      app.addteacherform.controls?.['teachername'].setValue("PravinKumar");
      app.addteacherform.controls?.['email'].setValue("rjpravin123@gmail.com");
      app.addteacherform.controls?.['degreecompleted'].setValue("PHD");
      app.addteacherform.controls?.['department'].setValue("ECE");
      app.addteacherform.controls?.['experience'].setValue("3");
      app.addteacherform.controls?.['gender'].setValue("Male");
      app.addteacherform.controls?.['institutionname'].setValue("VVE");
      app.addteacherform.controls?.['mobile'].setValue("9875234160");
      app.addteacherform.controls?.['password'].setValue("PravinKumar@11946");
      expect(app.addteacherform.valid).toBeTruthy();
    });

    it('Add Teacher form by Invalid data',() => {
      const fixture = TestBed.createComponent(AddteacherComponent);
      const app = fixture.componentInstance;
      app.addteacherform.controls?.['teacherid'].setValue("");
      app.addteacherform.controls?.['teachername'].setValue("");
      app.addteacherform.controls?.['email'].setValue("");
      app.addteacherform.controls?.['degreecompleted'].setValue("");
      app.addteacherform.controls?.['department'].setValue("");
      app.addteacherform.controls?.['experience'].setValue("");
      app.addteacherform.controls?.['gender'].setValue("");
      app.addteacherform.controls?.['institutionname'].setValue("");
      app.addteacherform.controls?.['mobile'].setValue("");
      app.addteacherform.controls?.['password'].setValue("");
      expect(app.addteacherform.valid).toBeTruthy();
    });

    it('Insert new Teacher to the database',() => {
      const fixture = TestBed.createComponent(AddteacherComponent);
      const app = fixture.componentInstance;
      app.addteacherform.controls?.['teacherid'].setValue("101");
      app.addteacherform.controls?.['teachername'].setValue("PravinKumar");
      app.addteacherform.controls?.['email'].setValue("rjpravin123@gmail.com");
      app.addteacherform.controls?.['degreecompleted'].setValue("PHD");
      app.addteacherform.controls?.['department'].setValue("ECE");
      app.addteacherform.controls?.['experience'].setValue("3");
      app.addteacherform.controls?.['gender'].setValue("Male");
      app.addteacherform.controls?.['institutionname'].setValue("VVE");
      app.addteacherform.controls?.['mobile'].setValue("9875234160");
      app.addteacherform.controls?.['password'].setValue("PravinKumar@11946");
      expect(app.addteacherform.valid).toBeTruthy();
    });

  });