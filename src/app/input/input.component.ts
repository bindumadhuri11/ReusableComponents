import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/countryservice';

@Component({
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  ngOnInit() {
  }
  disabled: boolean = true;

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  /* auto-complete*/
  brand1: any;

  countries: any[];

  filteredCountriesSingle: any[];

  filteredCountriesMultiple: any[];

  brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

  filteredBrands: any[];

  brand: string;



  filterCountrySingle(event) {
    let query = event.query;
    this.countryService.getCountries().toPromise().then(countries => {
      this.filteredCountriesSingle = this.filterCountry(query, countries.data);
    });
  }

  filterCountryMultiple(event) {
    let query = event.query;
    this.countryService.getCountries().toPromise().then(countries => {
      this.filteredCountriesMultiple = this.filterCountry(query, countries.data);
    });
  }

  filterCountry(query, countries: any[]): any[] {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    for (let i = 0; i < countries.length; i++) {
      let country = countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }
    return filtered;
  }

  filterBrands(event) {
    this.filteredBrands = [];
    for (let i = 0; i < this.brands.length; i++) {
      let brand = this.brands[i];
      if (brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
        this.filteredBrands.push(brand);
      }
    }
  }

}
