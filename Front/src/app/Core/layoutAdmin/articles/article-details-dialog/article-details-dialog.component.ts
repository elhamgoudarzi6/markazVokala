import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-details-dialog',
  templateUrl: './article-details-dialog.component.html',
  styleUrls: ['./article-details-dialog.component.scss'],
  providers: [
    MessageService, ConfirmationService
  ]
})
export class ArticleDetailsDialogComponent implements OnInit {

  article: any;
  keywords: string[];

  constructor(
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.article = this.config.data.article;
  }

  deleteBlog(id: any): void {
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
            // close
            this.ref.close(true);
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

  return():void{
    // close
    this.ref.close();
  }

}
