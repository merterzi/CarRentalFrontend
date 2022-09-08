import { ResponseModule } from "../responseModule";
import { RentalDetail } from "./rentalDetail";

export interface RentalDetailResponseModule extends ResponseModule{
    data:RentalDetail[];
}