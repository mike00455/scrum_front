import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTeamsEditFormComponent } from './manage-teams-edit-form.component';

describe('ManageTeamsEditFormComponent', () => {
  let component: ManageTeamsEditFormComponent;
  let fixture: ComponentFixture<ManageTeamsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTeamsEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTeamsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
