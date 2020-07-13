import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';    
import { Country } from '../interfaces/country'
// import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountrySearchService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/';

  constructor(private http: HttpClient) { }

  searchCountries(term: String) {
    return this.http.get<Country[]>(`${this.countriesUrl}name/${term}`);
  }

  getCountry(name: String): Observable<Country> {
    const url = `${this.countriesUrl}name/${name}`;
    return this.http.get<Country>(url);
  }

}
