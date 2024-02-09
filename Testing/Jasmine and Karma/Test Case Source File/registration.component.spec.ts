import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegistrationService } from 'src/app/services/registration.service';
import { LoginService } from 'src/app/services/login.service';
import { AdminService } from 'src/app/services/admin.service';
import { TeacherService } from 'src/app/services/teacher.service';
import { UserService } from 'src/app/services/user.service';
import { TeacherprofileComponent } from '../teacherprofile/teacherprofile.component';
import { TeacherdashboardComponent } from '../teacherdashboard/teacherdashboard.component';
import { LoginTeacherComponent } from '../loginTeacher/loginTeacher.component';
import { TeacherlistComponent } from '../teacherlist/teacherlist.component';


describe('Registration Taecher form Component Test', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [RegistrationComponent,TeacherprofileComponent,TeacherdashboardComponent,LoginTeacherComponent,TeacherlistComponent],
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
    it('To test the Teacher Registration component created', () => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Registration Teacher Component'`, () => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Registration Teacher Component');
    });
  
    it('Registration Teacher form Component GUI count for button',()=>{
      const fixture = TestBed.createComponent(RegistrationComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("button");
      expect(inputElements.length).toEqual(1);
    });

    it('Registration Teacher form Component GUI count for input',()=>{
      const fixture = TestBed.createComponent(RegistrationComponent);
      const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
      const inputElements = formElement.querySelectorAll("input");
      expect(inputElements.length).toEqual(11);
    });

    it('Registration Teacher form initial value',() => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      const app = fixture.componentInstance;
      const myFormGroup = app.teacherform
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

    it('Registration teacher form valid by Valid data',() => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      const app = fixture.componentInstance;
      app.teacherform.controls?.['teacherid'].setValue("100");
      app.teacherform.controls?.['teachername'].setValue("PravinKumar");
      app.teacherform.controls?.['email'].setValue("rjpravin123@gmail.com");
      app.teacherform.controls?.['degreecompleted'].setValue("PHD");
      app.teacherform.controls?.['department'].setValue("ECE");
      app.teacherform.controls?.['experience'].setValue("3");
      app.teacherform.controls?.['gender'].setValue("Male");
      app.teacherform.controls?.['institutionname'].setValue("VVE");
      app.teacherform.controls?.['mobile'].setValue("9875234160");
      app.teacherform.controls?.['password'].setValue("PravinKumar@11946");
      expect(app.teacherform.valid).toBeTruthy();
    });

    it('Registration Teacher form valid by invalid data',() => {
      const fixture = TestBed.createComponent(RegistrationComponent);
      const app = fixture.componentInstance;
      app.teacherform.controls?.['teacherid'].setValue("");
      app.teacherform.controls?.['teachername'].setValue("");
      app.teacherform.controls?.['email'].setValue("");
      app.teacherform.controls?.['degreecompleted'].setValue("");
      app.teacherform.controls?.['department'].setValue("");
      app.teacherform.controls?.['experience'].setValue("");
      app.teacherform.controls?.['gender'].setValue("");
      app.teacherform.controls?.['institutionname'].setValue("");
      app.teacherform.controls?.['mobile'].setValue("");
      app.teacherform.controls?.['password'].setValue("");
      expect(app.teacherform.valid).toBeTruthy();
    });
  });