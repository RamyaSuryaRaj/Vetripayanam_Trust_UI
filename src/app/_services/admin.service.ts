import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }
  private base_url: string = "http://localhost:3000/api/admin/";

  login(userName:string,password:string) {
    return this.http.get(this.base_url + 'login?userName=' + userName + '&password=' + password);
  }

  sendMail(mailOptions:any){
    return this.http.post(this.base_url + 'sendMail',mailOptions);
  }
}
