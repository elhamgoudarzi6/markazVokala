import { LayoutService } from './../../layout/layout.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import set = Reflect.set;
import { LocalStorageService } from '../../Auth/localStorageLogin/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem } from 'primeng/api';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public displayMobileMenu: boolean = false;

  countBadge = 0;
  visible = true;
  // items: { label: string; icon: string; command: (event: any) => Promise<boolean>; }[];
  items: MenuItem[];


  constructor(
    private route: Router,
    private service: LayoutService,
    public localStorage: LocalStorageService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  showMobileMenu(): void {
    this.displayMobileMenu = true;
  }

  ngOnInit(): void {
    var pc = window.document.getElementById('pc-fixed')!;
    var pcSticky = 0;

    if (pc !== null) {
      pcSticky = pc.offsetTop;
    }

    window.addEventListener('scroll', scroll, true);

    function scroll() {
      if (pc !== undefined) {
        if (window.pageYOffset > pcSticky) {
          pc.classList.add('sticky');
        } else {
          pc.classList.remove('sticky');
        }
      }
    }


    this.items = [
      {
        label: 'صفحه اصلی',
        icon: 'pi pi-pw pi-home',
        command: (event) => this.route.navigate(['/']),
      },
      {
        label: 'اعضا هیات مدیره',
        icon: 'pi pi-pw pi-users',
        command: (event) => this.route.navigate(['/team']),
      },
      {
        label: 'کارکنان',
        icon: 'pi pi-pw pi-users',
        command: (event) => this.route.navigate(['/staff']),
      },
      {
        label: 'سوالات متداول',
        icon: 'pi pi-fw pi-question-circle',
        command: (event) => this.route.navigate(['/faq']),
      },
      {
        label: 'اخبار',
        icon: 'pi pi-fw pi-tags',
        command: (event) => this.route.navigate(['/news']),
      },
      {
        label: 'سامانه ها',
        icon: 'pi pi-fw pi-desktop',
        items: [
          { label: 'تمدید پروانه', icon: 'pi pi-id-card' , url:"https://my.23055.ir/web/members/login?p_p_id=58&p_p_lifecycle=0&_58_redirect=%2Frenewal" },
          { label: 'اتوماسیون اداری', icon: 'pi pi-fw pi-desktop',url:"http://automation.23055.ir:1000/Account/Login?ReturnUrl=%2f" },
          { label: ' سامانه آموزش', icon: 'pi pi-fw pi-file-pdf',url:"https://lms.23055.ir/" },
          { label: 'کارآموزی', icon: 'pi pi-fw pi-users',url:"http://karamoozi.23055.ir/" },
          { label: 'پیگیری پرونده', icon: 'pi pi-fw pi-search',url:"http://77.237.94.52:880/jamea/parvandelogin.aspx" },
          { label: 'انتخابات 1400', icon: 'pi pi-fw pi-check-square' ,url:"https://jazb.23055.ir/auth/login"},
          { label: 'سامانه جذب', icon: 'pi pi-fw pi-file',url:"https://jazb.23055.ir/auth/login" },
          { label: 'امور هیات علمی', icon: 'pi pi-fw pi-book',url:"https://www.23055.ir/courses" },
        ]
      },
      {
        label: 'گالری',
        icon: 'pi pi-fw pi-question-circle',
        command: (event) => this.route.navigate(['/gallery']),
      },

      {
        label: 'درباره ما',
        icon: 'pi pi-fw pi-info-circle',
        command: (event) => this.route.navigate(['/about']),
      },
      {
        label: 'تماس با ما',
        icon: 'pi pi-fw pi-phone',
        command: (event) => this.route.navigate(['/contact']),
      },
    ];
    this.spinner.hide();
  }
}
