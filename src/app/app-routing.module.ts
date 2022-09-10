import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarDtoComponent } from './components/car-dto/car-dto.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarDtoComponent},
  {path:"cardtos", component:CarDtoComponent},
  {path:"cardtos/brand/:brandId", component:CarDtoComponent},
  {path:"cardtos/color/:colorId", component:CarDtoComponent},
  {path:"cardetails/carDto/:id", component:CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
