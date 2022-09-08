import { ResponseModule } from "../responseModule";
import { CustomerDetail } from "./customerDetail";

export interface CustomerDetailResponseModule extends ResponseModule{
    data:CustomerDetail[];
}