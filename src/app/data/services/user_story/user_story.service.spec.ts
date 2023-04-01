import { TestBed } from '@angular/core/testing';

import { User_storyService } from './user_story.service';

describe('UserStoryService', () => {
  let service: User_storyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User_storyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
