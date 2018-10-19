import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit {
  public logIn = 'User Login';
  public logOff = 'Log Off';
  constructor() { }

  public ngOnInit(): void {}

}
