import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) { }
  private base_url: string = "http://localhost:3000/api/payment/";

  postPayment(payment:any){
    return this.http.post(this.base_url + 'payment',payment);
  }

}
