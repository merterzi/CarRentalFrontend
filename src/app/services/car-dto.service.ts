import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl = 'https://localhost:44335/api/'

  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsByCarDto(id:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycarid?id=" + id;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandid=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDto
    >>(newPath);
  }

  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorid=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

}
