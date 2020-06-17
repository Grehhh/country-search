import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'search-bar', pathMatch: 'full'},
  { path: 'search-bar', component: SearchBarComponent },
  { path: 'country-details/:name', component: CountryDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
