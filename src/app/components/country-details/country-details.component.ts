import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountrySearchService } from '../../services/country-search.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country: Country;

  constructor(private countryService: CountrySearchService, private route:ActivatedRoute) { }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
    .subscribe(data => {
      this.country = data;
      console.log(this.country);
    });
  }

  ngOnInit() {
    this.getCountry();
  }

}
