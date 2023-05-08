import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/classes/payment'
import { PaymentService } from 'src/app/services/payment-service.service'
@Component({
  selector: 'app-payment-status',
  templateUrl: './payment-status.component.html',
  styleUrls: ['./payment-status.component.css']
})
export class PaymentStatusComponent implements OnInit {
  payments: Payment[];
  constructor(private paymentService: PaymentService) {

  }

  ngOnInit() {
    this.paymentService.findAll().subscribe(data => {
      this.payments = data;
    });
  }
  
}


