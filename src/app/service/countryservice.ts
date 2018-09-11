//import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    //getCountries() {
    //return this.http.get<any>('assets/showcase/data/countries.json')
    //  .toPromise()
    //  .then(res => <any[]>res.data)
    //  .then(data => { return data; });
    //}
    getCountries(): Observable<any> {
      return this.http.get('assets/data/countries.json');
    }
}
