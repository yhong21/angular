import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
  onlyOdd = true;
  oddNumbers:number[] = [1 ,3, 5];
  evenNumbers:number[] = [2,4,6];
  value = 10;
  constructor() { }

  ngOnInit() {
  }

}
