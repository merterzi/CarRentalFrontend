import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModule } from '../models/customerDetail/customerDetailResponseModule';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl = 'https://localhost:44335/api/customers/getcustomerdetails'

  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<CustomerDetailResponseModule>{
    return this.httpClient.get<CustomerDetailResponseModule>(this.apiUrl);
  }
}
