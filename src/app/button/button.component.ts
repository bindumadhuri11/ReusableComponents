import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  clicks: number = 0;
  count() {
    this.clicks++;
  }
  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Update', icon: 'fa fa-fw fa-refresh', command: () => {
        }
      },
      {
        label: 'Delete', icon: 'fa fa-fw fa-close', command: () => {
        }
      },
      { label: 'Angular.io', icon: 'fa fa-fw fa-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'fa fa-fw fa-paint-brush'}
    ];
  }

}
