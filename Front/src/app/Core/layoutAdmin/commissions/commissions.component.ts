import { Component, OnInit } from '@angular/core';
import { CommissionAddDialogComponent } from './commission-add-dialog/commission-add-dialog.component';
import { CommissionEditDialogComponent } from './commission-edit-dialog/commission-edit-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from './../admin.service';
@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.component.html',
  styleUrls: ['./commissions.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class CommissionsComponent implements OnInit {
  commissions: any[];
  constructor(private messageService: MessageService,
              private service: AdminService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getCommissions();
  }

  getCommissions(): any{
    this.service.getAllCommission().subscribe((response) => {
      if (response.success === true) {
        this.commissions = response.data;
      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }

  showEditCommissionDialog(id: string): void {
    let commission = this.commissions.filter(x => x._id == id)[0];
    const ref = this.dialogService.open(CommissionEditDialogComponent, {
      data: {
        commission
      },
      header: 'ویرایش کمیسیون',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getCommissions();
      }
    });
  }

  showAddCommissionDialog(): void {
    const ref = this.dialogService.open(CommissionAddDialogComponent, {
      header: 'ثبت کمیسیون',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getCommissions();
      }
    });
  }

  deleteCommission(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteCommission(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getCommissions();
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
