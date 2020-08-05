import { Component, Input } from '@angular/core';
import starRate from '@iconify/icons-ic/baseline-star-rate';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent {
  @Input()
  repositories: any;

  starRateIcon = starRate;
}
