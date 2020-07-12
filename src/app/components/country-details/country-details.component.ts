import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;     //#mapcontainer en html

  languages: string[] = [];
  langToShow: string;
  latlng: number[] = [];

  constructor(private countryService: CountrySearchService, private route:ActivatedRoute, private location: Location) { }

  getCountry(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
    .subscribe(data => {
      this.country = data;
      console.log('country:', this.country);
      for(let i = 0; i < this.country[0].languages.length; i++) {
        this.languages.push(this.country[0].languages[i].name);     //en caso de no acceder a la propiedad name, no se puede hacer el join()
      }
      this.langToShow = this.languages.join(', '); 
      // console.log(this.country[0].latlng);
      // console.log(this.country[0].latlng[0]);
      // console.log(this.country[0].latlng[1]);
    });
  }

  mapInitializer():void {
    let lat = 0;
    let lng = 0;
    const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
    .subscribe(data => {
      this.country = data;
      lat = this.country[0].latlng[0];
      lng = this.country[0].latlng[1];
      // console.log(this.country[0].latlng);
      console.log(this.country[0].latlng[0]);
      console.log(this.country[0].latlng[1]);
      const coordinates = new google.maps.LatLng(lat, lng);
      const mapOptions: google.maps.MapOptions = {
        center: coordinates,
        zoom: 8
      };
      const map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
      const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
      });
      marker.setMap(map);
    });
  }

  goBack(): void {
    this.location.back();
  }



  ngOnInit() {
    this.getCountry();
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }

}
