import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubService } from './git-hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userWithRepositories$: Observable<any>;

  constructor(github: GitHubService) {
    this.userWithRepositories$ = github.getUserWithRepositories('marklagendijk');
  }

  ngOnInit(): void {
  }
}
