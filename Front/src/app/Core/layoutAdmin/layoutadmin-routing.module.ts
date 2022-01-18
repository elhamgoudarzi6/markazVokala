import { SlidersComponent } from './sliders/sliders.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SubscriptionUsersComponent } from './subscription-users/subscription-users.component';
import { ContactFormMessagesComponent } from './contact-form-messages/contact-form-messages.component';
import { AdministratorsComponent } from './administrators/administrators.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ArticlesComponent } from './articles/articles.component';
import { NotificationsComponent } from './notification/notifications.component';
import { OccasionsComponent } from './occasion/occasions.component';
import { VideosComponent } from './video/videos.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AdminGuard} from '../../Auth/Guard/admin.guard';
import { CommissionsComponent } from './commissions/commissions.component';
import { MoazedatsComponent } from './moazedats/moazedats.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'panel',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: BlogsComponent,
      },
    ],
    canActivate:[AdminGuard]
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
    canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'blog',
        component: BlogsComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'article',
        component: ArticlesComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'notification',
        component: NotificationsComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'occasion',
        component: OccasionsComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'video',
        component: VideosComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'contact',
        component: ContactFormMessagesComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'subscription',
        component: SubscriptionUsersComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        component: AdministratorsComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'faq',
        component: FaqsComponent,
      },
    ],  canActivate:[AdminGuard]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'slider',
      component: SlidersComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'commissions',
      component: CommissionsComponent
    }]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'moazedats',
      component: MoazedatsComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutadminRoutingModule {}
