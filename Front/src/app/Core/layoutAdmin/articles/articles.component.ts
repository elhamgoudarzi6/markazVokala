import { ArticleDetailsDialogComponent } from './article-details-dialog/article-details-dialog.component';
import { ArticleAddDialogComponent } from './article-add-dialog/article-add-dialog.component';
import { ArticleEditDialogComponent } from './article-edit-dialog/article-edit-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class ArticlesComponent implements OnInit {

  articles: any[];

  constructor(private messageService: MessageService,
              private service: AdminService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getArticles();

  }

  getArticles(): any{
    this.service.getAllArticle().subscribe((response) => {
      if (response.success === true) {
        this.articles = response.data;

      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }



  showEditArticleDialog(id: string): void {
    let article = this.articles.filter(x => x._id == id)[0];

    const ref = this.dialogService.open(ArticleEditDialogComponent, {
      data: {
        article
      },
      header: 'ویرایش مقاله',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getArticles();
      }
    });
  }
  showDetailsArticleDialog(id: string): void {
    let article = this.articles.filter(x => x._id == id)[0];

    const ref = this.dialogService.open(ArticleDetailsDialogComponent, {
      data: {
        article
      },
      header: 'مشاهده اطلاعات مقاله',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.getArticles();
      }
    });
  }

  showAddArticleDialog(): void {
    const ref = this.dialogService.open(ArticleAddDialogComponent, {
      header: 'ثبت مقاله',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getArticles();
      }
    });
  }

  deleteArticle(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteArticle(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getArticles();
          } else {
            this.messageService.add({severity: 'error', summary: ' حذف اطلاعات ', detail: response.data});
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }

}
