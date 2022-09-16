import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDto } from 'src/app/models/carDto';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDtoService } from 'src/app/services/car-dto.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-dto',
  templateUrl: './car-dto.component.html',
  styleUrls: ['./car-dto.component.css'],
})
export class CarDtoComponent implements OnInit {
  carDtos: CarDto[] = [];
  brands: Brand[] = [];
  colors: Color[] = [];
  carImages: CarImage[];
  currentCarDto: CarDto;
  currentBrandId: number;
  currentColorId: number;
  filterText: string = '';

  constructor(
    private carDtoService: CarDtoService,
    private brandService: BrandService,
    private colorService: ColorService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['currentBrandId'] && params['currentColorId']) {
        this.filterCarList(params['currentBrandId'], params['currentColorId']);
      } else if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColor(params['colorId']);
      } else {
        this.getCarDetails();
      }
    });
    this.getBrands();
    this.getColors();
  }

  getCarDetails() {
    this.carDtoService.getCarDetails().subscribe((response) => {
      this.carDtos = response.data;
    });
  }

  filterCarList(brandId: number, colorId: number) {
    this.carDtoService
      .getCarDetailsByBrandAndColor(brandId, colorId)
      .subscribe((response) => {
        this.carDtos = response.data;
      });
  }

  getCarImagesByCar(carId: number) {
    this.carImageService.getCarImagesByCar(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
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
