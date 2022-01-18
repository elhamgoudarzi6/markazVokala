import { Component, OnInit } from '@angular/core';
import { LayoutService } from './../layout.service';

@Component({
  selector: 'app-moazedat',
  templateUrl: './moazedat.component.html',
  styleUrls: ['./moazedat.component.scss']
})
export class MoazedatComponent implements OnInit {
  AllMoazedat: any[] = [];
  displayBasic: boolean;
  displayNotNews:boolean=false;
  constructor(private service: LayoutService) {}
    ngOnInit(): void {
    this.service.getAllMoazedat().subscribe((response) => {
      if (response['success'] === true) {
        this.AllMoazedat = response['data'];

      }
    });
  }
}
