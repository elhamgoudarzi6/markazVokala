import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-add-dialog',
  templateUrl: './article-add-dialog.component.html',
  styleUrls: ['./article-add-dialog.component.scss'],
  providers: [MessageService]
})
export class ArticleAddDialogComponent implements OnInit {

  public form: FormGroup;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان مقاله را وارد کنید.' }],
    author: [{ type: 'required', message: 'نویسنده مقاله را وارد کنید.' }],
    details: [{ type: 'required', message: 'جزییات مقاله را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر مقاله را آپلود کنید.' }],
    date: [{type: 'required', message: 'تاریخ مقاله را وارد کنید.'}],
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      details: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      imageDescription: new FormControl(null),
      date: new FormControl(null,[Validators.required]),
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
          summary: ' آپلود تصویر  ',
          detail: response.data,
        });
      }
    });
  }

  submitForm(): void {
    this.service.addArticle(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
