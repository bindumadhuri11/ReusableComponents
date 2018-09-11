//import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 

@Injectable()
export class EventService {

    constructor(private http: HttpClient) { }

    getEvents() {
    return this.http.get<any>('assets/showcase/data/scheduleevents.json')
      .toPromise()
      .then(res => <any[]>res.data)
      .then(data => { return data; });
    }
}
