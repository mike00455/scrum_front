import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintsUpdateComponent } from './sprints-update.component';

describe('SprintsUpdateComponent', () => {
  let component: SprintsUpdateComponent;
  let fixture: ComponentFixture<SprintsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
