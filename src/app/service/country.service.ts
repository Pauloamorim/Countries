import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountry(): Observable<Object>{
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
  getCountryByName(name):Observable<Object>{
    return this.http.get('https://restcountries.eu/rest/v2/name/'+name);
  }
}
