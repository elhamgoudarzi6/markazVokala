import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occasion-add-dialog',
  templateUrl: './occasion-add-dialog.component.html',
  styleUrls: ['./occasion-add-dialog.component.scss'],
  providers: [MessageService]
})
export class OccasionAddDialogComponent implements OnInit {

  public form: FormGroup;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان مناسبت را وارد کنید.' }],
    brief: [{ type: 'required', message: 'خلاصه مناسبت را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر مناسبت را آپلود کنید.' }],
    date: [{type: 'required', message: 'تاریخ مناسبت را وارد کنید.'}],
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
          summary: ' آپلود تصویر مناسبت ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر مناسبت ',
          detail: response.data,
        });
      }
    });
  }

  submitForm(): void {
    this.service.addOccasion(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
