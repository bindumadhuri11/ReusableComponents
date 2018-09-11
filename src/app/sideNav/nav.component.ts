import { Component, OnInit } from '@angular/core';

@Component({
  selector:'<app-nav></app-nav>',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  selectedMenu: string;
  ngOnInit() {
    var navFlag = window.location.pathname;
    this.selectedModule(navFlag);
  }
  selectedModule(moduleName) {
    this.selectedMenu = moduleName;
  }
}
