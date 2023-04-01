import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SprintsService} from "@app/data/services/sprints/sprints.service";

@Component({
  selector: 'app-score-sprint-days',
  templateUrl: './score-sprint-days.component.html',
  styleUrls: ['./score-sprint-days.component.css']
})
export class ScoreSprintDaysComponent implements OnInit {
  sprintId: string | null = '';
  arrayDates: any[] =[];
  constructor(
    private route: ActivatedRoute,
    public sprintService: SprintsService
  ) {
  }

  ngOnInit(): void {
    this.sprintId = this.route.snapshot.paramMap.get('sprintId');
    this.getAllDatesSprint();
  }

  getAllDatesSprint() {
    this.sprintService.getAllDatesSprint(this.sprintId).subscribe({
      next: (data) => {
        this.arrayDates = data;
        console.log(this.arrayDates)
      }
    }
   );
  }
  saveDatesSprints(){

  }

}
