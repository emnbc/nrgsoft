import { Component } from '@angular/core';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'nat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMobile: boolean;

  constructor(private app: AppService) {
    this.app.isMobile.subscribe(isMobile => this.isMobile = isMobile);
  }

}
