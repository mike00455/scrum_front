import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subproject } from "@app/data/interfaces/subprojects";
import { SubprojectService } from "@app/data/services/subproject/subproject.service";


@Component({
  selector: 'app-subprojetc',
  templateUrl: './subprojetc.component.html',
  styleUrls: ['./subprojetc.component.css']
})
export class SubprojetcComponent implements OnInit {
  subproject: Subproject | any;

  constructor(
    public formBuilder: FormBuilder,
    public subprojectService: SubprojectService
  ) { }

  ngOnInit(): void {

    this.subprojectService.getAllSubprojects().subscribe(resp => {
      this.subproject = resp;
    });
  }

}
