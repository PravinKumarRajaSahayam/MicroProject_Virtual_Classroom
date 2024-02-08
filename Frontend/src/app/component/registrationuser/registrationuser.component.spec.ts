import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUserComponent } from './registrationuser.component';

describe('RegistrationUserComponent', () => {
  let component: RegistrationUserComponent;
  let fixture: ComponentFixture<RegistrationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
