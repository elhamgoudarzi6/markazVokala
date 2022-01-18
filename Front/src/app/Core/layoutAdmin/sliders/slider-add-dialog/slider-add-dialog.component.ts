import { AdminService } from './../../admin.service';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-add-dialog',
  templateUrl: './slider-add-dialog.component.html',
  styleUrls: ['./slider-add-dialog.component.scss'],
  providers: [MessageService]
})
export class SliderAddDialogComponent implements OnInit {
  public form: FormGroup;
  categories: any[] = [];
  gallery: any[] = [];
  errorMessages = {
    imageDescription: [{ type: 'required', message: ' توضیح تصویر را وارد کنید.' }],
    imageurl: [{ type: 'required', message: 'تصویر معاضدت را آپلود کنید.' }],
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
    this.getCategories();

  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((response) => {
      if (response.success === true) {
        this.categories = response.data;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' دریافت اطلاعات ',
          detail: response.data,
        });
      }
    });
  } 
  onCategory(e: any) {
    this.form.controls.categoryID.setValue(e.value._id);
  }

  onMultipleUpload(event): void {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('files', event.files[i], event.files[i].name);
    }
    this.service.uploadMultiFiles(formData).subscribe((response) => {

      if (response.success === true) {

        let imgPathList : any[] = [];
        response.imagePath.forEach(element => {
          imgPathList.push('http://api.markazvl.ir/'+ element.path);
        });

        this.form.controls.gallery.setValue(imgPathList);

        this.messageService.add({
          severity: 'success',
          summary: ' آپلود تصویر محصول ',
          detail: 'تصویر با موفقیت آپلود شد.',
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: ' آپلود تصویر محصول ',
          detail: response.data,
        });
      }
    });
  }

  createform(): void {
    this.form = this.formBuilder.group({
      categoryID: [{ type: 'required', message: 'دسته بندی  گالری را انتخاب کنید.' }],
      imageurl: new FormControl(null, [Validators.required]),
      imageDescription: new FormControl(null),
      gallery: new FormControl(null),
    });
  }

  imageUploader(event): void {
    const formData = new FormData();
    formData.append('file', event.files[0], event.files[0].name);
    this.service.uploadFile(formData).subscribe((response) => {
      if (response.success === true) {
        this.form.controls.imageurl.setValue(response.imagePath);
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
    this.service.addSlider(this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data});
      }
    });
  }


}
