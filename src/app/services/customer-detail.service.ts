import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModel } from '../models/customerDetail/customerDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl = 'https://localhost:44335/api/customers/getcustomerdetails'

  constructor(private httpClient:HttpClient) { }

  getCustomerDetails():Observable<CustomerDetailResponseModel>{
    return this.httpClient.get<CustomerDetailResponseModel>(this.apiUrl);
  }
}
