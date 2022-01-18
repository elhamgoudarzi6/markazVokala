import { NotificationDetailsDialogComponent } from './notification-details-dialog/notification-details-dialog.component';
import { NotificationAddDialogComponent } from './notification-add-dialog/notification-add-dialog.component';
import { NotificationEditDialogComponent } from './notification-edit-dialog/notification-edit-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from '../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class NotificationsComponent implements OnInit {

  notifications: any[];

  constructor(private messageService: MessageService,
              private service: AdminService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getNotifications();
  }

  getNotifications(): any{
    this.service.getAllNotification().subscribe((response) => {
      if (response.success === true) {
        this.notifications = response.data;

      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }

  showEditNotificationDialog(id: string): void {
    let notification = this.notifications.filter(x => x._id == id)[0];
    const ref = this.dialogService.open(NotificationEditDialogComponent, {
      data: {
        notification
      },
      header: 'ویرایش اطلاعیه',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getNotifications();
      }
    });
  }

  showDetailsNotificationDialog(id: string): void {
    let notification = this.notifications.filter(x => x._id == id)[0];
    const ref = this.dialogService.open(NotificationDetailsDialogComponent, {
      data: {
        notification
      },
      header: 'مشاهده اطلاعیه',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.getNotifications();
      }
    });
  }

  showAddNotificationDialog(): void {
    const ref = this.dialogService.open(NotificationAddDialogComponent, {
      header: 'ثبت اطلاعیه',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getNotifications();
      }
    });
  }

  deleteNotification(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteNotification(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getNotifications();
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
