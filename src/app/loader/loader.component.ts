import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  ngOnInit(){
    // $(window).on('load', function () {
    //   $('#preloader-active').delay(450).fadeOut('slow');
    //   $('body').delay(450).css({
    //     'overflow': 'visible'
    //   });
    // });
  }

}
