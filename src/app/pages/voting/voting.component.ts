import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate/candidate.service';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  dashbaordData = [];
  constructor(private service: CandidateService, private appService: AppServiceService) { }

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

  vote(row: any) {
    if (row.voted) return;
    row.voted = true;


    this.service.voteCandidate({
      ...row,
      voters: [{ idNumber: this.appService.getLoggedUserName() }]
    }).subscribe();
  }

  isVoted(data: any) {
    return data.some((s: any) => s.voted || (s.voters.length > 0 && s.voters.find((f: any) => f.idNumber === this.appService.getLoggedUserName)))
  }
}
