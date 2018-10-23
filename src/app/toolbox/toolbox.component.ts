import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})

export class ToolboxComponent implements OnInit {
  public faPlusSquare = faPlusSquare;

  public ngOnInit(): void { }

}
