import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModule } from '../models/brand/brandResponseModule';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44335/api/brands/getall'

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<BrandResponseModule>{
    return this.httpClient.get<BrandResponseModule>(this.apiUrl);
  }

}
