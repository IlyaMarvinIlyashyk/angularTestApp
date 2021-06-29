import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // typescript validation here

  clickCounter: number = 0;

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addClick() {
    this.clickCounter += 1
  }

  removeClick() {
    this.clickCounter -= 1
  } 

  setClasses() {
    const myClasses = {
      active: this.clickCounter > 4,
      notActive: this.clickCounter <= 4,
    }

    return myClasses
  }

}
