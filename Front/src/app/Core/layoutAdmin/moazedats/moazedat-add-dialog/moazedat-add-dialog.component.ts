import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moazedat-add-dialog',
  templateUrl: './moazedat-add-dialog.component.html',
  styleUrls: ['./moazedat-add-dialog.component.scss'],
  providers: [MessageService]
})
export class MoazedatAddDialogComponent implements OnInit {
  public form: FormGroup;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان معاضدت را وارد کنید.' }],
    details: [{ type: 'required', message: 'جزییات معاضدت را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر معاضدت را آپلود کنید.' }],
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
      details: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
      date: new FormControl(null),
      imageDescription: new FormControl(null),
      time: new FormControl(null),
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
          summary: ' آپلود تصویر  ',
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
    this.service.addMoazedat(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }


}
