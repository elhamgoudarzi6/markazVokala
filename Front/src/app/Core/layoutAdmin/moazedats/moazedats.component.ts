import { Component, OnInit } from '@angular/core';
import { MoazedatAddDialogComponent } from './moazedat-add-dialog/moazedat-add-dialog.component';
import { MoazedatEditDialogComponent } from './moazedat-edit-dialog/moazedat-edit-dialog.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AdminService } from './../admin.service';
@Component({
  selector: 'app-moazedats',
  templateUrl: './moazedats.component.html',
  styleUrls: ['./moazedats.component.scss'],
  providers: [
    MessageService, ConfirmationService, DialogService
  ]
})
export class MoazedatsComponent implements OnInit {
  moazedats: any[];
  constructor(private messageService: MessageService,
              private service: AdminService,
              private dialogService: DialogService,
              private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.getMoazedats();
  }

  getMoazedats(): any{
    this.service.getAllMoazedat().subscribe((response) => {
      if (response.success === true) {
        this.moazedats = response.data;
      } else {
        this.messageService.add({severity: 'error', summary: ' دریافت اطلاعات ', detail: response.data});
      }
    });
  }

  showEditMoazedatDialog(id: string): void {
    let moazedat = this.moazedats.filter(x => x._id == id)[0];
    const ref = this.dialogService.open(MoazedatEditDialogComponent, {
      data: {
        moazedat
      },
      header: 'ویرایش معاضدت',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ویرایش اطلاعات ',
          detail: 'اطلاعات با موفقیت ویرایش شد.'
        });
        this.getMoazedats();
      }
    });
  }

  showAddMoazedatDialog(): void {
    const ref = this.dialogService.open(MoazedatAddDialogComponent, {
      header: 'ثبت معاضدت',
      width: '70%'
    });

    ref.onClose.subscribe(res => {
      if (res === true){
        this.messageService.add({
          severity: 'success',
          summary: ' ثبت اطلاعات ',
          detail: 'اطلاعات با موفقیت ثبت شد.'
        });
        this.getMoazedats();
      }
    });
  }

  deleteMoazedat(id: any): void {
    this.confirmationService.confirm({
      message: 'آیا از حذف رکورد انتخابی مطمین هستید؟',
      header: 'تایید حذف',
      icon: 'pi pi-exclamation-triangle',
      rejectLabel: 'خیر',
      acceptLabel: 'بله',
      defaultFocus: 'reject',
      accept: () => {
        // delete from db
        this.service.deleteMoazedat(id).subscribe((response) => {
          if (response.success === true) {
            this.confirmationService.close();
            this.messageService.add({severity: 'success', summary: ' حذف اطلاعات ', detail: response.data});
            this.getMoazedats();
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
