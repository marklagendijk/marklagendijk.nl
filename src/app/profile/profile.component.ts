import { Component, Input } from '@angular/core';
import locationOn from '@iconify/icons-ic/location-on';
import email from '@iconify/icons-ic/email';
import link from '@iconify/icons-ic/link';
import coporateFare from '@iconify/icons-ic/baseline-corporate-fare';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input()
  user: any;

  locationOnIcon = locationOn;
  emailIcon = email;
  linkIcon = link;
  corporateFareIcon = coporateFare;
}
