import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrySearchService } from '../../services/country-search.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  selectedcountry: Country;

  constructor(private countryService: CountrySearchService) { }
  
  // countries: Country[]= [];
  countries$: Observable<Country[]>;
  private searchString = new Subject<string>();     //Subject es tanto una fuente de valores observables como unobservable en si mismo  

  // getCountries(): void {
  //   this.countryService.getCountries()
  //   .subscribe(
  //     (data => { 
  //       this.countries = data;
  //       // console.log(this.countries);
  //     }),
  //     (error) => {
  //       console.error(error);
  //     });
  // }

  search(term: string): void {
    this.searchString.next(term);
  }

  ngOnInit() {
    // this.getCountries();
    this.countries$ = this.searchString.pipe(

      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.countryService.searchCountries(term)),
    );
  }

}
