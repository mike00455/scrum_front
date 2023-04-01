import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditFormComponent } from './customer-edit-form.component';

describe('CustomerEditFormComponent', () => {
  let component: CustomerEditFormComponent;
  let fixture: ComponentFixture<CustomerEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
