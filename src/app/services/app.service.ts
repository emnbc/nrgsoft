import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * Mobile state: true - mobile, false - not mobile.
   */
  isMobile = new BehaviorSubject<boolean>(null);

}
