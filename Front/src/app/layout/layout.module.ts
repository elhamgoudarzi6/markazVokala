import { RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { AllNotificationComponent } from './all-notification/all-notification.component';
import { TeamComponent } from './team/team.component';
import { StaffComponent } from './staff/staff.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderComponent } from './home/slider/slider.component';
import { LatestNewsComponent } from './home/latest-news/latest-news.component';
import { NotificationsComponent } from './home/notifications/notifications.component';
import { DadyariComponent } from './home/dadyari/dadyari.component';
import { PartnersComponent } from './home/partners/partners.component';
import { FeaturesComponent } from './home/features/features.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedmodulesModule } from '../SharedModules/sharedmodules.module';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SharedComponentsModule } from '../SharedComponents/sharedcomponents.module';
import { HomeComponent } from './home/home.component';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { CarouselModule } from "ngx-owl-carousel-o";
import { GalleriaModule } from "primeng/galleria";
import { TabViewModule } from "primeng/tabview";
import { StepsModule } from "primeng/steps";
import { MatStepperModule } from "@angular/material/stepper";
import { CommissionComponent } from './commission/commission.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MoazedatComponent } from './moazedat/moazedat.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    PartnersComponent,
    LatestNewsComponent,
    SliderComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    NotificationsComponent,
    NotificationDetailsComponent,
    AllNotificationComponent,
    NewsComponent,
    NewsDetailsComponent,
    HomeComponent,
    TeamComponent,
    GalleryComponent,
    StaffComponent,
    DadyariComponent,
    CommissionComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    MoazedatComponent,
    GalleryDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    OrganizationChartModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    SharedmodulesModule,
    SharedComponentsModule,
    SharedModule,
    NgImageFullscreenViewModule,
    NgxImageZoomModule,
    JwPaginationModule,
    CarouselModule,
    GalleriaModule,
    TabViewModule,
    StepsModule,
    MatStepperModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
