import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-add-dialog',
  templateUrl: './notification-add-dialog.component.html',
  styleUrls: ['./notification-add-dialog.component.scss'],
  providers: [MessageService]
})
export class NotificationAddDialogComponent implements OnInit {
  public form: FormGroup;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان اطلاعیه را وارد کنید.' }],
    brief: [{ type: 'required', message: 'خلاصه اطلاعیه را وارد کنید.' }],
    details: [{ type: 'required', message: 'جزییات اطلاعیه را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر اطلاعیه را آپلود کنید.' }],
    date: [{type: 'required', message: 'تاریخ اطلاعیه را وارد کنید.'}],
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
      brief: new FormControl(null, [Validators.required]),
      details: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      keywords: new FormControl(null),
      imageDescription: new FormControl(null),
      metaDescription: new FormControl(null),
      date: new FormControl(null,[Validators.required]),
      tags: new FormControl(null)
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
          summary: ' آپلود تصویر اطلاعیه ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر اطلاعیه ',
          detail: response.data,
        });
      }
    });
  }

  submitForm(): void {
    let keywords = this.form.controls.keywords.value;
    this.form.controls.keywords.setValue(keywords.toString());
    let tags = this.form.controls.tags.value;
    this.form.controls.tags.setValue((tags.toString()).split(" "));
    this.service.addNotification(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
