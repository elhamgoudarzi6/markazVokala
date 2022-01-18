import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AdminService } from './../../admin.service';
@Component({
  selector: 'app-slider-edit-dialog',
  templateUrl: './slider-edit-dialog.component.html',
  styleUrls: ['./slider-edit-dialog.component.scss'],
  providers: [MessageService]
})
export class SliderEditDialogComponent implements OnInit {

  public form: FormGroup;
  slider: any;
  categories: any[] = [];
  gallery: any[] = [];
  selectedCat: any;
  errorMessages = {
    categoryID: [{ type: 'required', message: 'دسته بندی را انتخاب کنید.' },],
    imageDescription: [{ type: 'required', message: 'توضیحات تصویر  را وارد کنید.' }],
    imageurl: [{ type: 'required', message: 'تصویر معاضدت را آپلود کنید.' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    public ref: DynamicDialogRef,
    public messageService: MessageService,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.slider = this.config.data.slider;
    this.getCategories();
    this.createform();
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

  createform(): void {
    this.form = this.formBuilder.group({
      categoryID: new FormControl(this.slider.categoryID, [Validators.required]),
      gallery: new FormControl(this.slider.gallery),
      imageurl: new FormControl(this.slider.imageurl, [Validators.required]),
      imageDescription: new FormControl(this.slider.imageDescription, [Validators.required]),
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

  onMultipleUpload(event): void {
    const formData = new FormData();
    for (let i = 0; i < event.files.length; i++) {
      formData.append('files', event.files[i], event.files[i].name);
    }
    this.service.uploadMultiFiles(formData).subscribe((response) => {
      console.log(response);
      if (response.success === true) {
        let imgPathList: any[] = [];
        response.imagePath.forEach((element) => {
          imgPathList.push('http://api.markazvl.ir/' + element.path);
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

  submitForm(): void {
    this.service.editSlider(this.slider._id, this.form.value).subscribe((response) => {
      if (response.success === true) {
        this.ref.close(true);
      } else {
        this.messageService.add({ severity: 'error', summary: ' ثبت اطلاعات ', detail: response.data });
      }
    });
  }

}
