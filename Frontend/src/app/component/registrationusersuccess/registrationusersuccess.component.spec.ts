import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationusersuccessComponent } from './registrationusersuccess.component';

describe('RegistrationusersuccessComponent', () => {
  let component: RegistrationusersuccessComponent;
  let fixture: ComponentFixture<RegistrationusersuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationusersuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationusersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
