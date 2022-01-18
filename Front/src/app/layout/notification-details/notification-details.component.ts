import { LayoutService } from './../layout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.scss']
})
export class NotificationDetailsComponent implements OnInit {

  latestNotification: any[] = [];
  AllNotification: any[] = [];
  notification: any[] = [];
  displayBasic: boolean;
  isLogged: boolean;
  displayNotNotification: boolean = false;
  Alltags: any[] = [];
  notificationID: string;
  constructor(private service: LayoutService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      this.notificationID = params.get('id'));

    this.service.getLatestNotification().subscribe((response) => {
      if (response['success'] === true) {
        this.latestNotification = response['data'];
      }
    });

    this.service.getAllTagNotification().subscribe((response) => {
      if (response['success'] === true) {
        this.Alltags = response['data'];
      }
    });

    this.service.getNotification(this.notificationID).subscribe((response) => {
      if (response['success'] === true) {
        this.notification = response['data'];
      }
    });

  }
}
