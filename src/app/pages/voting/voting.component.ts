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
    this.loadDashboard();
  }
  loadDashboard() {
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


    this.service.voteCandidate(
       { idNumber: this.appService.getLoggedUserName() }, row
    ).subscribe(() => this.loadDashboard());
  }

  isVoted(data: any) {
    return data.some((s: any) => s.voted)
  }

  getVoter(category: any, vote: any) {
    this.dashbaordData[category]
    return vote.vote.find(((f: any) => f.voter.idNumber === this.appService.getLoggedUserName()))
  }
}
