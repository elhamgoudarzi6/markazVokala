import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from '../../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-edit-dialog',
  templateUrl: './notification-edit-dialog.component.html',
  styleUrls: ['./notification-edit-dialog.component.scss'],
  providers: [MessageService]
})
export class NotificationEditDialogComponent implements OnInit {
  public form: FormGroup;
  notification: any;
  keywords: string[];
  tags: string[];
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان اطلاعیه را وارد کنید.' }],
    brief: [{ type: 'required', message: 'خلاصه اطلاعیه را وارد کنید.' }],
    details: [{ type: 'required', message: 'جزییات اطلاعیه را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر اطلاعیه را آپلود کنید.' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.notification = this.config.data.notification;
    if(this.notification.keywords != ''){
      this.keywords = this.notification.keywords.split(',');
    }
    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.notification.title, [Validators.required]),
      brief: new FormControl(this.notification.brief, [Validators.required]),
      details: new FormControl(this.notification.details, [Validators.required]),
      image: new FormControl(this.notification.image, [Validators.required]),
      keywords: new FormControl(this.notification.keywords),
      tags: new FormControl(this.notification.tags),
      imageDescription: new FormControl(this.notification.imageDescription),
      metaDescription: new FormControl(this.notification.metaDescription)
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

    this.service.editNotification(this.notification._id, this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }
}
