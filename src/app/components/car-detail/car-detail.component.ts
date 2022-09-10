import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[];
  carDtos: CarDto[];

  constructor(
    private carImageService: CarImageService,
    private carDtoService: CarDtoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getCarDetailsByCarDto(params['id']);
        this.getCarImagesByCar(params['id']);
      }
    });
  }

  getCarDetailsByCarDto(id: number) {
    this.carDtoService.getCarDetailsByCarDto(id).subscribe((response) => {
      this.carDtos = response.data;
    });
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarImagesByCar(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getPath(): string {
    return 'https://localhost:44335/Uploads/Images/';
  }

  checkIfFirstImage(carImage:CarImage){
    if(carImage== this.carImages[0]){
      return "carousel-item active"
    }else{
      return "carousel-item"
    }
  }
}


