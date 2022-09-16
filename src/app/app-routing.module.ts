import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarDtoComponent},
  {path:"cardtos", component:CarDtoComponent},
  {path:"cardtos/brand/:brandId", component:CarDtoComponent},
  {path:"cardtos/color/:colorId", component:CarDtoComponent},
  {path:"cardtos/filter/:currentBrandId/:currentColorId", component:CarDtoComponent},
  {path:"cardetails/carDto/:id", component:CarDetailComponent},
  {path:"rentals/add", component:RentalAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
