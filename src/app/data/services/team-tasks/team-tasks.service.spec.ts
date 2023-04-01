import { TestBed } from '@angular/core/testing';

import { TeamTasksService } from './team-tasks.service';

describe('TeamTasksService', () => {
  let service: TeamTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
