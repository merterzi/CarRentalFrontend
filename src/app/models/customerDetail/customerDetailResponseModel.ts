import { ResponseModel } from "../responseModel";
import { CustomerDetail } from "./customerDetail";

export interface CustomerDetailResponseModel extends ResponseModel{
    data:CustomerDetail[];
}