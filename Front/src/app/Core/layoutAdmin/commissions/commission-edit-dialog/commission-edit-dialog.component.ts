import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from './../../admin.service';
@Component({
  selector: 'app-commission-edit-dialog',
  templateUrl: './commission-edit-dialog.component.html',
  styleUrls: ['./commission-edit-dialog.component.scss'],
  providers: [MessageService]

})
export class CommissionEditDialogComponent implements OnInit {

  public form: FormGroup;
  commission: any;
  errorMessages = {
    title: [{ type: 'required', message: 'عنوان کمیسیون را وارد کنید.' }],
    details: [{ type: 'required', message: 'جزییات کمیسیون را وارد کنید.' }],
    image: [{ type: 'required', message: 'تصویر کمیسیون را آپلود کنید.' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.commission = this.config.data.commission;
     this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.commission.title, [Validators.required]),
      details: new FormControl(this.commission.details, [Validators.required]),
      image: new FormControl(this.commission.image, [Validators.required]),
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
          summary: ' آپلود تصویر کمیسیون ',
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

    this.service.editCommission(this.commission._id, this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
