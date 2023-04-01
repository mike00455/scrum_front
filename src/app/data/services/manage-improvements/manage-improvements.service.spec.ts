import { TestBed } from '@angular/core/testing';

import { ManageImprovementsService } from './manage-improvements.service';

describe('ManageImprovementsService', () => {
  let service: ManageImprovementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageImprovementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
