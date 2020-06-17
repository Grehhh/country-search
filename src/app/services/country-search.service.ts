import { Injectable } from '@angular/core';
// import { Country } from '../interfaces/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';    //para cuando eta observables
import { Country } from '../interfaces/country'
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountrySearchService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl + 'all');
  }

  getCountry(name: String): Observable<Country> {
    const url = `${this.countriesUrl}name/${name}`;
    return this.http.get<Country>(url);
  }




  
}
