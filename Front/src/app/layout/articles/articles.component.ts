import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  latestArticles: any[] = [];
  AllArticle: any[] = [];
  displayBasic: boolean;
  displayNotArticle:boolean=false;
  constructor(private service: LayoutService) {}
    ngOnInit(): void {
    this.service.getLatestArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.latestArticles = response['data'];
      }
    });

    this.service.getAllArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.AllArticle = response['data'];

      }
    });


}
}
