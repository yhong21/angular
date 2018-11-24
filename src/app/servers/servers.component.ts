import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // component
  //selector: '[app-servers]', // attribute
  //selector: '.app-servers', // class
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
