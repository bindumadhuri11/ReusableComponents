import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];

  checked: boolean = false;

}
