import { AdminService } from './../admin.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-subscription-users',
  templateUrl: './subscription-users.component.html',
  styleUrls: ['./subscription-users.component.scss'],
  providers: [
    MessageService, ConfirmationService
  ]
})
export class SubscriptionUsersComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  smsList: any[];
  constructor(private messageService: MessageService,
    private service: AdminService,
    private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getSmsList();
  }

  getSmsList(): any {
    this.service.getAllSmsSubscriptions().subscribe((response) => {
      if (response.success === true) {
        this.smsList = response.data;

      } else {
        this.messageService.add({ severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data });
      }
    });
  }
  printToCart(printSectionId: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
  
  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'report.xlsx');
  }

  deleteSms(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteSmsSubscription(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({ severity: 'success', summary: ' حذف اطلاعات ', detail: response.data });
            this.getSmsList();
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
