import { Component, OnInit } from '@angular/core';
import { SliderAddDialogComponent } from './slider-add-dialog/slider-add-dialog.component';
import { SliderEditDialogComponent } from './slider-edit-dialog/slider-edit-dialog.component';
import { CategoryEditDialogComponent } from './category-edit-dialog/category-edit-dialog.component';
import { CategoryAddDialogComponent } from './category-add-dialog/category-add-dialog.component';

import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from './../admin.service';
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class SlidersComponent implements OnInit {
  sliders: any[];
  categories: any[];
  constructor(private messageService: MessageService,
    private service: AdminService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getSliders();
    this.getCategories();
  }

  getCategories(): any {
    this.service.getAllCategories().subscribe((response) => {
      if (response.success === true) {
        this.categories = response.data;
      } else {
        this.messageService.add({ severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data });
      }
    });
  }
  
  getSliders(): any {
    this.service.getSliders().subscribe((response) => {
      if (response.success === true) {
        this.sliders = response.data;
      } else {
        this.messageService.add({ severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data });
      }
    });
  }

  showEditCategoryDialog(id: string, title: string): void {
    const ref = this.dialogService.open(CategoryEditDialogComponent, {
      data: {
        id,
        title
      },
      header: 'ویرایش عنوان دسته بندی',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true) {
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getCategories();
      }
    });
  }

  showAddCategoryDialog(): void {
    const ref = this.dialogService.open(CategoryAddDialogComponent, {
      header: 'ثبت عنوان دسته بندی',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true) {
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getCategories();
      }
    });
  }

  deleteCategory(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteCategory(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({ severity: 'success', summary: ' حذف اطلاعات ', detail: response.data });
            this.getCategories();
          } else {
            this.messageService.add({ severity: 'error', summary: ' حذف اطلاعات ', detail: response.data });
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }

  showEditSliderDialog(id: string): void {
    let slider = this.sliders.filter(x => x._id == id)[0];
    const ref = this.dialogService.open(SliderEditDialogComponent, {
      data: {
        slider
      },
      header: 'ویرایش اسلایدر',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true) {
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getSliders();
      }
    });
  }

  showAddSliderDialog(): void {
    const ref = this.dialogService.open(SliderAddDialogComponent, {
      header: 'ثبت اسلایدر',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true) {
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getSliders();
      }
    });
  }

  deleteSlider(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteSlider(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({ severity: 'success', summary: ' حذف اطلاعات ', detail: response.data });
            this.getSliders();
          } else {
            this.messageService.add({ severity: 'error', summary: ' حذف اطلاعات ', detail: response.data });
          }
        });
      },
      reject: () => {
        // close
        this.confirmationService.close();
      }
    });
  }


}
