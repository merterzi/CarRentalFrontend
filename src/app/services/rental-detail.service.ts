import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModule } from '../models/rentalDetail/rentalDetailResponseModule';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl = 'https://localhost:44335/api/rentals/getrentaldetails'

  constructor(private httpClient:HttpClient) { }

  getRentalDetails():Observable<RentalDetailResponseModule>{
    return this.httpClient.get<RentalDetailResponseModule>(this.apiUrl);
  }
}
