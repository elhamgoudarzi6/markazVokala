import { Component, OnInit } from '@angular/core';
import { EmployeeAddDialogComponent } from './employee-add-dialog/employee-add-dialog.component';
import { MemberAddDialogComponent } from './member-add-dialog/member-add-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class EmployeeComponent implements OnInit {

  employees: any[];
  members: any[];
  constructor(private messageService: MessageService,
              private service: AdminService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getMembers();
    this.getEmployees();
  }

  getMembers(): any{
    this.service.getAllMember().subscribe((response) => {
      if (response.success === true) {
        this.members = response.data;
      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }

  getEmployees(): any{
    this.service.getAllEmployee().subscribe((response) => {
      if (response.success === true) {
        this.employees = response.data;
      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }

  showAddMemberDialog(): void {
    const ref = this.dialogService.open(MemberAddDialogComponent, {
      header: 'ثبت اعضا هیات مدیره',
      width: '70%'
    });
    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getMembers();
      }
    });
  }

  deleteMember(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteMember(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getMembers();
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

  showAddEmployeeDialog(): void {
    const ref = this.dialogService.open(EmployeeAddDialogComponent, {
      header: 'ثبت کارمند',
      width: '70%'
    });
    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getEmployees();
      }
    });
  }

  deleteEmployee(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteEmployee(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getEmployees();
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
