import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-edit-dialog',
  templateUrl: './article-edit-dialog.component.html',
  styleUrls: ['./article-edit-dialog.component.scss'],
  providers: [MessageService]
})
export class ArticleEditDialogComponent implements OnInit {

  public form: FormGroup;
  article: any;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان مقاله را وارد کنید.' }],
    author: [{ type: 'required', message: 'نویسنده مقاله را وارد کنید.' }],
    details: [{ type: 'required', message: 'جزییات مقاله را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر مقاله را آپلود کنید.' }],
    date: [{ type: 'required', message: 'تصویر مقاله را آپلود کنید.' }],

  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.article = this.config.data.article;

    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.article.title, [Validators.required]),
      author: new FormControl(this.article.author, [Validators.required]),
      details: new FormControl(this.article.details, [Validators.required]),
      image: new FormControl(this.article.image, [Validators.required]),
      imageDescription: new FormControl(this.article.imageDescription),
      date: new FormControl(this.article.date),
    });
  }

  imageUploader(event): void {
    const formData = new FormData();
    formData.append('file', event.files[0], event.files[0].name);
    this.service.uploadFile(formData).subscribe((response) => {
      if (response.success === true) {
        this.form.controls.image.setValue(response.imagePath);
        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر مقاله ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر مقاله ',
          detail: response.data,
        });
      }
    });
  }

  submitForm(): void {

    this.service.editArticle(this.article._id, this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }
}
