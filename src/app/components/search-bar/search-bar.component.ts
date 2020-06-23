import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrySearchService } from '../../services/country-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  selectedcountry: Country;

  constructor(private countryService: CountrySearchService) { }
  
  countries: Country[]= [];

  getCountries(): void {
    this.countryService.getCountries()
    .subscribe(
      (data => { 
        this.countries = data;
        // console.log(this.countries);
      }),
      (error) => {
        console.error(error);
      });
  }

  ngOnInit() {
    this.getCountries();
  }

}
