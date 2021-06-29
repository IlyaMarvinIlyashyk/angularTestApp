import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.scss']
})
export class BreweriesComponent implements OnInit {

  brews: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    });
  }

}
