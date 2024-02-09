import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourselistComponent } from './courselist.component';
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

describe('View Course List Component Test', () => {
  let component: CourselistComponent;
  let fixture: ComponentFixture<CourselistComponent>;
  beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [CourselistComponent],
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
    it('To test the View Course List component created', () => {
      const fixture = TestBed.createComponent(CourselistComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    // it(`should have as title 'View Course List Component'`, () => {
    //   const fixture = TestBed.createComponent(AddchapterComponent);
    //   const app = fixture.componentInstance;
    //   expect(app.title).toEqual('View Course List Component');
    // });
  
    // it('Add Cahpter form Component GUI count for button',()=>{
    //   const fixture = TestBed.createComponent(AddchapterComponent);
    //   const formElement = fixture.debugElement.nativeElement.querySelector("#ngForm");
    //   const inputElements = formElement.querySelectorAll("a");
    //   expect(inputElements.length).toEqual(1);
    // });
  });