import { Component } from '@angular/core';
import { header } from '../models/header';
import { headerTemplates } from '../_helpers/helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headers = headerTemplates;

  constructor(){}

  ngOninit(){
  }

  setActive(header:header){
      this.headers.forEach((x:header)=>{
        if(x.routerLink == header.routerLink) x.active = true;
        else x.active  = false;
      })
  }
}
