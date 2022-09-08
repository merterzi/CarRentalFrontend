import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModule } from '../models/carDetail/carDetailResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44335/api/cars/getcardetails'

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<CarDetailResponseModule>{
    return this.httpClient.get<CarDetailResponseModule>(this.apiUrl);
  }
}
