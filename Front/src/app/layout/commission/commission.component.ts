import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
  AllCommission: any[] = [];
  displayBasic: boolean;
  displayNotNews:boolean=false;
  constructor(private service: LayoutService) {}
    ngOnInit(): void {
    this.service.getAllCommission().subscribe((response) => {
      if (response['success'] === true) {
        this.AllCommission = response['data'];

      }
    });
  }
}
