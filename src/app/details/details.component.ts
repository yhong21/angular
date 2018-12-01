import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  display = true;
  details:number[] = [];
  i = 0;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.display = !this.display;
    this.details.push(this.i++);
  }
  afterFive(){
    return this.i > 5;
  }
}
