import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from '../../services/http-helper.service';

@Component({
  selector: 'nrg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpHelperService) { }

  ngOnInit(): void {
    this.http.find('photos').subscribe(res => {
      console.log(res);
    })
  }

}
