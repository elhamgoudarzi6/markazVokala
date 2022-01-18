import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-add-dialog',
  templateUrl: './video-add-dialog.component.html',
  styleUrls: ['./video-add-dialog.component.scss'],
  providers: [MessageService]
})
export class VideoAddDialogComponent implements OnInit {

  public form: FormGroup;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان ویدیو را وارد کنید.' }],
    brief: [{ type: 'required', message: 'خلاصه ویدیو را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر ویدیو را آپلود کنید.' }],
    videoUrl: [{ type: 'required', message: 'لینک ویدیو را وارد کنید.' }],
    date: [{type: 'required', message: 'تاریخ ویدیو را وارد کنید.'}],
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
      image: new FormControl(null, [Validators.required]),
      date: new FormControl(null,[Validators.required]),
      videoUrl: new FormControl(null,[Validators.required]),
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
          summary: ' آپلود تصویر ویدیو ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر ویدیو ',
          detail: response.data,
        });
      }
    });
  }

  submitForm(): void {
    this.service.addVideo(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
