import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User_storyService } from "@app/data/services/user_story/user_story.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-user-story-management',
  templateUrl: './user-story-management.component.html',
  styleUrls: ['./user-story-management.component.css']
})
export class UserStoryManagementComponent implements OnInit {
  userStory: any;
  id: any;
  userStoryForm: FormGroup = new FormGroup({});

  constructor(
    public formBuilder: FormBuilder,
    public userStoryService: User_storyService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userStoryForm = this.formBuilder.group({
      subProjectId: new FormControl(null, [Validators.required]),
      userStoryName: new FormControl(null, [Validators.required]),
      userStoryArchive: new FormControl(null, []),
      userStoryStateId: new FormControl(null, [Validators.required]),
    });

    this.id = this.route.snapshot.paramMap.get('userStoryId');
    this.getUserStoryById(this.id)
  }

  getUserStoryById(id: string | null) {
    this.userStoryService.getUserStoryById(id).subscribe(resp => {
        this.userStory = resp;
        this.userStoryForm.patchValue({
          subProjectId: this.userStory.subProjectId,
          userStoryName: this.userStory.userStoryName,
          userStoryStateId: this.userStory.userStoryStateId,
        });
      },
    );
  }

  edit() {
    if (this.userStoryForm.valid) {
      const data = {
        subProjectId: this.userStoryForm.get('subProjectId')?.value,
        userStoryArchive: this.userStoryForm.get('userStoryArchive')?.value,
        userStoryName: this.userStoryForm.get('userStoryName')?.value,
        userStoryStateId: this.userStoryForm.get('userStoryStateId')?.value
      }
      this.userStoryService.updateUserStory(this.id, data).subscribe(
        (resp) => {
          this.userStoryForm.reset();
        },
        error => (console.error(error)));
    }

  }
}
