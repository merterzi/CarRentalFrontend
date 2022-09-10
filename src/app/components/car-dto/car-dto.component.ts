import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css'],
})
export class CarDtoComponent implements OnInit {
  carDtos: CarDto[] = [];
  carImages: CarImage[];
  currentCarDto: CarDto;

  constructor(
    private carDtoService: CarDtoService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColor(params['colorId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails() {
    this.carDtoService.getCarDetails().subscribe((response) => {
      this.carDtos = response.data;
    });
  }

  setCurrentCarDto(carDto: CarDto) {
    this.currentCarDto = carDto;
  }

  getCarDetailsByBrand(brandId: number) {
    this.carDtoService.getCarDetailsByBrand(brandId).subscribe((response) => {
      this.carDtos = response.data;
    });
  }

  getCarDetailsByColor(colorId: number) {
    this.carDtoService.getCarDetailsByColor(colorId).subscribe((response) => {
      this.carDtos = response.data;
    });
  }
}
