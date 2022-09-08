import { ResponseModule } from "../responseModule";
import { CarDetail } from "./carDetail";

export interface CarDetailResponseModule extends ResponseModule{
    data:CarDetail[];
}