import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-add-dialog',
  templateUrl: './member-add-dialog.component.html',
  styleUrls: ['./member-add-dialog.component.scss'],
  providers: [MessageService]

})
export class MemberAddDialogComponent implements OnInit {

  public form: FormGroup;
  errorMessages = {
    fullName: [{ type: 'required', message: ' نام و نام خانوادگی را وارد کنید.' }],
    role: [{ type: 'required', message: ' نقش را وارد کنید.' }],
    level: [{ type: 'required', message: ' سطح را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر  را آپلود کنید.' }],
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
      fullName: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      level: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required]),
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
    this.service.addMember(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
