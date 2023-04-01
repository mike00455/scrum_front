import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { SubprojectService } from "@app/data/services/subproject/subproject.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-subprojetc-edit',
  templateUrl: './subprojetc-edit.component.html',
  styleUrls: ['./subprojetc-edit.component.css']
})
export class SubprojetcEditComponent implements OnInit {
  subprojectEditForm: FormGroup = new FormGroup({});
  subproject: any;
  subProjectId: any;

  constructor(
    public formBuilder: FormBuilder,
    public subprojectService: SubprojectService,
    private route: ActivatedRoute,
    private routeurl: Router
  ) {
  }

  ngOnInit(): void {
    this.subprojectEditForm = this.formBuilder.group({
      subprojectName: new FormControl(null, [Validators.required])
    });
    this.subProjectId = this.route.snapshot.paramMap.get('subProjectId');
    this.getSubProjectById(this.subProjectId)
  }

  getSubProjectById(id: string | null) {
    this.subprojectService.getSubProjectById(id).subscribe(resp => {
        this.subproject = resp;

        this.subprojectEditForm.patchValue({
          subprojectName: this.subproject.subProjectName,
        });
        console.log(resp)
      },
      error => {
        console.error(error);
      });
  }

  edit() {
    if (this.subprojectEditForm.valid) {
      const data = {
        subProjectName: this.subprojectEditForm.get('subprojectName')?.value,
      }
      this.subprojectService.updateSubProject(this.subProjectId, data).subscribe(
        (resp) => {
          this.subprojectEditForm.reset();
          this.routeurl.navigateByUrl('app/proyect/subproject-see').then(r => console.log());
        },
        error => (console.error(error)));
    }
  }

}
