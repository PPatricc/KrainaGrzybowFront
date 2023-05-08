import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../classes/payment';
import { Observable } from 'rxjs';

@Injectable()
export class PaymentService {

  private paymentUrl: string;

  constructor(private http: HttpClient) {
    this.paymentUrl = 'http://localhost:8080/api/payments/paysafecards';
  }

  public findAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentUrl);
  }

}
