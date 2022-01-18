import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-dadyari',
  templateUrl: './dadyari.component.html',
  styleUrls: ['./dadyari.component.scss']
})
export class DadyariComponent implements OnInit {
  customOptions: OwlOptions = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 5000,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      600: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items:5
      }
    }
  };



  constructor() { }

  ngOnInit(): void {
  }

}
