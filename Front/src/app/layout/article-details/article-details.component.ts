import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../layout.service';
import {LocalStorageService} from '../../Auth/localStorageLogin/local-storage.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  latestArticle: any[] = [];
  Article: any[] = [];
  displayBasic: boolean;
  displayNotArticle:boolean=false;
  articleID:string;
  constructor(private service: LayoutService,
              private route: ActivatedRoute ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params =>
        this.articleID = params.get('id'));

    this.service.getLatestArticle().subscribe((response) => {
      if (response['success'] === true) {
        this.latestArticle = response['data'];
      }
    });

    this.service.getArticle(this.articleID).subscribe((response) => {
      if (response['success'] === true) {
        this.Article = response['data'];
      }
    });

  }
}
