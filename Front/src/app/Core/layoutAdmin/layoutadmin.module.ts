import { SharedmodulesModule } from './../../SharedModules/sharedmodules.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './../../layout/layout.module';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LayoutadminRoutingModule } from './layoutadmin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogAddDialogComponent } from './blogs/blog-add-dialog/blog-add-dialog.component';
import { BlogEditDialogComponent } from './blogs/blog-edit-dialog/blog-edit-dialog.component';
import { BlogDetailsDialogComponent } from './blogs/blog-details-dialog/blog-details-dialog.component';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleAddDialogComponent } from './articles/article-add-dialog/article-add-dialog.component';
import { ArticleEditDialogComponent } from './articles/article-edit-dialog/article-edit-dialog.component';
import { ArticleDetailsDialogComponent } from './articles/article-details-dialog/article-details-dialog.component';

import { NotificationsComponent } from './notification/notifications.component';
import { NotificationAddDialogComponent } from './notification/notification-add-dialog/notification-add-dialog.component';
import { NotificationEditDialogComponent } from './notification/notification-edit-dialog/notification-edit-dialog.component';
import { NotificationDetailsDialogComponent } from './notification/notification-details-dialog/notification-details-dialog.component';
import { OccasionsComponent } from './occasion/occasions.component';
import { OccasionAddDialogComponent } from './occasion/occasion-add-dialog/occasion-add-dialog.component';
import { OccasionEditDialogComponent } from './occasion/occasion-edit-dialog/occasion-edit-dialog.component';

import { VideosComponent } from './video/videos.component';
import { VideoAddDialogComponent } from './video/video-add-dialog/video-add-dialog.component';

import { AdministratorsComponent } from './administrators/administrators.component';
import { AdminAddDialogComponent } from './administrators/admin-add-dialog/admin-add-dialog.component';
import { AdminEditDialogComponent } from './administrators/admin-edit-dialog/admin-edit-dialog.component';
import { ContactFormMessagesComponent } from './contact-form-messages/contact-form-messages.component';
import { SubscriptionUsersComponent } from './subscription-users/subscription-users.component';
import { AdminChangePasswordDialogComponent } from './administrators/admin-change-password-dialog/admin-change-password-dialog.component';
import { AdminChangeUsernameDialogComponent } from './administrators/admin-change-username-dialog/admin-change-username-dialog.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqAddDialogComponent } from './faqs/faq-add-dialog/faq-add-dialog.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { SlidersComponent } from './sliders/sliders.component';
import { SliderAddDialogComponent } from './sliders/slider-add-dialog/slider-add-dialog.component';
import { SliderEditDialogComponent } from './sliders/slider-edit-dialog/slider-edit-dialog.component';
import { CategoryAddDialogComponent } from './sliders/category-add-dialog/category-add-dialog.component';
import { CategoryEditDialogComponent } from './sliders/category-edit-dialog/category-edit-dialog.component';
import {NgxPrintModule} from "ngx-print";
import { CommissionsComponent } from './commissions/commissions.component';
import { CommissionEditDialogComponent } from './commissions/commission-edit-dialog/commission-edit-dialog.component';
import { CommissionAddDialogComponent } from './commissions/commission-add-dialog/commission-add-dialog.component';
import { MoazedatsComponent } from './moazedats/moazedats.component';
import { MoazedatEditDialogComponent } from './moazedats/moazedat-edit-dialog/moazedat-edit-dialog.component';
import { MoazedatAddDialogComponent } from './moazedats/moazedat-add-dialog/moazedat-add-dialog.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeAddDialogComponent } from './employee/employee-add-dialog/employee-add-dialog.component';
import { MemberAddDialogComponent } from './employee/member-add-dialog/member-add-dialog.component';
@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    BlogsComponent,
    ArticlesComponent,
    VideosComponent,
    VideoAddDialogComponent,
    NotificationsComponent,
    NotificationAddDialogComponent,
    NotificationEditDialogComponent,
    OccasionsComponent,
    OccasionAddDialogComponent,
    OccasionEditDialogComponent,
    NotificationDetailsDialogComponent,
    BlogAddDialogComponent,
    BlogEditDialogComponent,
    ArticleAddDialogComponent,
    ArticleEditDialogComponent,
    ArticleDetailsDialogComponent,
    AdministratorsComponent,
    AdminAddDialogComponent,
    AdminEditDialogComponent,
    ContactFormMessagesComponent,
    SubscriptionUsersComponent,
    BlogDetailsDialogComponent,
    AdminChangePasswordDialogComponent,
    AdminChangeUsernameDialogComponent,
    ResetPasswordComponent,
    ProfileComponent,
    FaqsComponent,
    FaqAddDialogComponent,
    SlidersComponent,
    SliderAddDialogComponent,
    SliderEditDialogComponent,
    CategoryAddDialogComponent,
    CategoryEditDialogComponent,
    CommissionsComponent,
    CommissionEditDialogComponent,
    CommissionAddDialogComponent,
    MoazedatsComponent,
    MoazedatEditDialogComponent,
    MoazedatAddDialogComponent,
    EmployeeComponent,
    EmployeeAddDialogComponent,
    MemberAddDialogComponent,
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutadminRoutingModule,
    LayoutModule,
    HttpClientModule,
    PdfViewerModule,
    SharedmodulesModule,
    NgxPrintModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DashboardComponent],
  entryComponents: [
    BlogAddDialogComponent,
    BlogEditDialogComponent,
    BlogDetailsDialogComponent,
    ArticleAddDialogComponent,
    ArticleEditDialogComponent,
    ArticleDetailsDialogComponent,
    VideoAddDialogComponent,
    NotificationAddDialogComponent,
    NotificationEditDialogComponent,
    NotificationDetailsDialogComponent,
    OccasionAddDialogComponent,
    OccasionEditDialogComponent,
    AdminAddDialogComponent,
    AdminEditDialogComponent,
    AdminChangePasswordDialogComponent,
    AdminChangeUsernameDialogComponent,
    FaqAddDialogComponent,
    SliderAddDialogComponent,
    SliderEditDialogComponent,
    CategoryAddDialogComponent,
    CategoryEditDialogComponent,
    CommissionEditDialogComponent,
    CommissionAddDialogComponent,
    MoazedatEditDialogComponent,
    MoazedatAddDialogComponent,
  ],
})
export class LayoutadminModule {}
