import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  AllEmployee: any[] = [];
  constructor(private service: LayoutService) {}
    ngOnInit(): void {
    this.service.getAllEmployee().subscribe((response) => {
      if (response['success'] === true) {
        this.AllEmployee = response['data'];
      }
    });
  }
}
