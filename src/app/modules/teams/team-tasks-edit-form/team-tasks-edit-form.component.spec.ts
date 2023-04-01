import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTasksEditFormComponent } from './team-tasks-edit-form.component';

describe('TeamTasksEditFormComponent', () => {
  let component: TeamTasksEditFormComponent;
  let fixture: ComponentFixture<TeamTasksEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTasksEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamTasksEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
