import { Component } from '@angular/core';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[AdminService]
})
export class ContactComponent {
constructor(private adminService:AdminService){}

  enquiy(){
    
  }

}
