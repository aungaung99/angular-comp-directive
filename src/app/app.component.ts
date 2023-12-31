import { Component } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-comp-directive';

  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
