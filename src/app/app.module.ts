import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeServicesComponent } from './home-services/home-services.component';
import { LocationsComponent } from './locations/locations.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { LocationsLandingComponent } from './locations-landing/locations-landing.component';
import { ColorNavbarComponent } from './color-navbar/color-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneMaskDirective } from './phone-mask.directive';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    HomeServicesComponent,
    LocationsComponent,
    LocationsLandingComponent,
    HomeContactComponent,
    ScrollSpyDirective,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ContactComponent,
    CarouselComponent,
    LocationsLandingComponent,
    ColorNavbarComponent,
    PhoneMaskDirective,
    MaintenanceComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
