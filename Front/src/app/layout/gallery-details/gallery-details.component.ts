import { LayoutService } from './../layout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.scss']
})
export class GalleryDetailsComponent implements OnInit {
  gallery: any[] = [];
  galleryID: string;

  constructor(private service: LayoutService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => this.galleryID = params.get('id'));
    this.service.getSlider(this.galleryID).subscribe((response) => {
      if (response['success'] === true) {
        this.gallery = response['data'];
      }
    });
  }
}