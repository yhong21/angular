import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName:string = '';

  constructor() { }

  ngOnInit() {
  }

  isUserNameEmpty(){
    if(this.userName){
      return false;
    }
    return true;
  }

  resetUserName(){
    this.userName = '';
  }
}
