import { Injectable } from '@angular/core';
// import { Country } from '../interfaces/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';    //para cuando eta observables
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountrySearchService {

  private url = 'https://restcountries.eu/rest/v2';

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) { }

  getCountry():Observable<any> {
    return this.http.get(this.url);
  }
  
}
