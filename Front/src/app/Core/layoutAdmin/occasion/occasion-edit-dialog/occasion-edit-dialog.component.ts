import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from '../../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occasion-edit-dialog',
  templateUrl: './occasion-edit-dialog.component.html',
  styleUrls: ['./occasion-edit-dialog.component.scss'],
  providers: [MessageService]
})
export class OccasionEditDialogComponent implements OnInit {

  public form: FormGroup;
  occasion: any;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان مناسبت را وارد کنید.' }],
    brief: [{ type: 'required', message: 'خلاصه مناسبت را وارد کنید.' }],
    date: [{ type: 'required', message: 'تاریخ مناسبت را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر مناسبت را آپلود کنید.' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.occasion = this.config.data.occasion;
    this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.occasion.title, [Validators.required]),
      brief: new FormControl(this.occasion.brief, [Validators.required]),
      image: new FormControl(this.occasion.image, [Validators.required]),
      date: new FormControl(this.occasion.date, [Validators.required]),
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
    this.service.editOccasion(this.occasion._id, this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({ severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data });
      }
    });
  }
}
