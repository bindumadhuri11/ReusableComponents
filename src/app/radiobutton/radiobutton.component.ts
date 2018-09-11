import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  val1: string;

  val2: string = 'Option 2';

}
