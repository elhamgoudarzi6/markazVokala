import { LayoutService } from './../../layout.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  latestNews: any[] = [];
  latestArticle:any[]=[];
  displayBasic: boolean;
  name="eli";
  flag=false;
  displayNotNews:boolean=false;
  constructor(private service: LayoutService) {}
  ngOnInit(): void {
    this.service.getLatestNews().subscribe((response) => {
      if (response['success'] === true) {
        this.latestNews = response['data'];
      }
    });

    this.service.getLatestArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.latestArticle = response['data'];
      }
    });
  }

}
