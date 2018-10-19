import { Component, OnInit } from '@angular/core';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  public faCloudSun = faCloudSun;

  public ngOnInit(): void {}

}
