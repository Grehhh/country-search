import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountrySearchService } from '../../services/country-search.service'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() country: Country;
  languages: string[] = [];
  langToShow: string;

  constructor(private countryService: CountrySearchService, private route:ActivatedRoute, private location: Location) { }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
    .subscribe(data => {
      this.country = data;
      console.log('country:', this.country);
      // console.log('name:', this.country[0].name);
      for(let i = 0; i < this.country[0].languages.length; i++) {
        // console.log('languages:', this.country[0].languages[i].name);
        this.languages.push(this.country[0].languages[i].name);     //en caso de no acceder a la propiedad name, no se puede hacer el join()
      }
      this.langToShow = this.languages.join(', ');
      // console.log(this.langToShow);
      console.log('toGerman',this.country[0].translations.de )


      
      
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getCountry();
  }

}
