import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { CandidateComponent } from '../candidate/candidate.component';
import { CandidateService } from '../candidate/candidate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashbaordData = [];
  constructor(private service: CandidateService) { }

  ngOnInit(): void {
    this.service.getDashboard().subscribe((res: any) => {
      this.dashbaordData = res.reduce((acc: any, cur: any) => {
        acc[cur.category.name] = acc[cur.category.name] || []
        acc[cur.category.name] = [...acc[cur.category.name], cur] 
        return acc;
      }, {})
    });
  }

  get categories(): any[] {
    return Object.keys(this.dashbaordData);
  }
}
