import { OccasionAddDialogComponent } from './occasion-add-dialog/occasion-add-dialog.component';
import { OccasionEditDialogComponent } from './occasion-edit-dialog/occasion-edit-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occasions',
  templateUrl: './occasions.component.html',
  styleUrls: ['./occasions.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class OccasionsComponent implements OnInit {

  occasions: any[];

  constructor(private messageService: MessageService,
              private service: AdminService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getOccasions();

  }

  getOccasions(): any{
    this.service.getAllOccasion().subscribe((response) => {
      if (response.success === true) {
        this.occasions = response.data;

      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }



  showEditOccasionDialog(id: string): void {
    let occasion = this.occasions.filter(x => x._id == id)[0];
    const ref = this.dialogService.open(OccasionEditDialogComponent, {
      data: {
        occasion
      },
      header: 'ویرایش مناسبت',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getOccasions();
      }
    });
  }

  showAddOccasionDialog(): void {
    const ref = this.dialogService.open(OccasionAddDialogComponent, {
      header: 'ثبت مناسبت',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت مناسبت ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getOccasions();
      }
    });
  }

  deleteOccasion(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteOccasion(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getOccasions();
          } else {
            this.messageService.add({severity: 'error', summary: ' حذف اطلاعات ', detail: response.data});
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
