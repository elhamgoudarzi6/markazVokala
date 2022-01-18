import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from './../../admin.service';
@Component({
  selector: 'app-moazedat-edit-dialog',
  templateUrl: './moazedat-edit-dialog.component.html',
  styleUrls: ['./moazedat-edit-dialog.component.scss'],
  providers: [MessageService]
})
export class MoazedatEditDialogComponent implements OnInit {

  public form: FormGroup;
  moazedat: any;
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
    this.moazedat = this.config.data.moazedat;
     this.createform();
  }

  createform(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(this.moazedat.title, [Validators.required]),
      details: new FormControl(this.moazedat.details, [Validators.required]),
      image: new FormControl(this.moazedat.image, [Validators.required]),
      date: new FormControl(this.moazedat.date),
      imageDescription: new FormControl(this.moazedat.imageDescription),
      time: new FormControl(this.moazedat.time),
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
    this.service.editMoazedat(this.moazedat._id, this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }

}
