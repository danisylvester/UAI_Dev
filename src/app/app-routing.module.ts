import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { LocationsComponent } from './locations/locations.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'locations', component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
