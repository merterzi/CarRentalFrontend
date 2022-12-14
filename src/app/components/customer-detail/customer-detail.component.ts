import { Component, OnInit } from '@angular/core';
import { CustomerDetail } from 'src/app/models/customerDetail';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerDetails:CustomerDetail[] = [];

  constructor(private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails(){
    this.customerDetailService.getCustomerDetails().subscribe(response=>{
      this.customerDetails = response.data;
    })
  }
}
