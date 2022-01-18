import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../layout.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class GalleryComponent implements OnInit {
  videos: any[] = [];
  sliders: any[] = [];
  dialogService: any;
  constructor(private service: LayoutService) { }
  ngOnInit(): void {
    this.service.getAllVideo().subscribe((response) => {
      if (response['success'] === true) {
        this.videos = response['data'];
      }
    });

    this.service.getSliders().subscribe((response) => {
      if (response.success === true) {
        this.sliders = response.data;
      }
    });
  }

 
}
