import { LayoutService } from '../layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-notification',
  templateUrl: './all-notification.component.html',
  styleUrls: ['./all-notification.component.scss']
})
export class AllNotificationComponent implements OnInit {

  latestNotifications: any[] = [];
  AllNotification: any[] = [];
  displayBasic: boolean;
  displayNotNews:boolean=false;
  Alltags: any[] = [];
  constructor(private service: LayoutService) {}
    ngOnInit(): void {
    this.service.getLatestNotification().subscribe((response) => {
      if (response['success'] === true) {
        this.latestNotifications = response['data'];
      }
    });

    this.service.getAllNotification().subscribe((response) => {
      if (response['success'] === true) {
        this.AllNotification = response['data'];

      }
    });

    this.service.getAllTagNotification().subscribe((response) => {
      if (response['success'] === true) {
        this.Alltags = response['data'];
      }
    });
}

}
