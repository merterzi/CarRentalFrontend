import { CarImage } from "./carImage";

export interface CarDto{
    id:number;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    modelYear:string;
    description:string;
    carImages:CarImage[];
}