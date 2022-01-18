import { LayoutService } from './../layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  latestNews: any[] = [];
  AllNews: any[] = [];
  displayBasic: boolean;
  displayNotNews:boolean=false;
  Alltags: any[] = [];
  constructor(private service: LayoutService) {}
    ngOnInit(): void {
    this.service.getLatestNews().subscribe((response) => {
      if (response['success'] === true) {
        this.latestNews = response['data'];
      }
    });

    this.service.getAllNews().subscribe((response) => {
      if (response['success'] === true) {
        this.AllNews = response['data'];

      }
    });

    this.service.getAllTagNews().subscribe((response) => {
      if (response['success'] === true) {
        this.Alltags = response['data'];
      }
    });
}

}
