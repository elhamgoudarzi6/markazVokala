import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../../layout.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
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
    nav: true,
    navText: ['<i class="fa fa-chevron-left fa-x"></i>', '<i class="fa fa-chevron-right fa-x"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items:1
      }
    }
  };
  
  newestNotification: any[] = [];
  newestOccasion: any[] = [];
  constructor(private service: LayoutService) {}
  ngOnInit(): void {
    this.service.getLatestOccasion().subscribe((response) =>{
      if (response['success'] === true) {
        this.newestOccasion = response['data'];
      }
    });
    this.service.getLatestNotification().subscribe((response) =>{
      if (response['success'] === true) {
        this.newestNotification = response['data'];
      }
    });
  }
 
}
