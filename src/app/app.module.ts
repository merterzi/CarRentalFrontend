import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarDtoComponent,
    CustomerDetailComponent,
    RentalDetailComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
