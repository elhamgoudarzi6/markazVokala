import {HomeComponent} from './home/home.component';
import {TeamComponent} from './team/team.component';
import {StaffComponent} from './staff/staff.component';
import {GalleryComponent} from './gallery/gallery.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {ContactComponent} from './contact/contact.component';
import {NewsComponent} from './news/news.component';
import {AllNotificationComponent} from './all-notification/all-notification.component';
import {NewsDetailsComponent} from './news-details/news-details.component';
import {NotificationDetailsComponent} from './notification-details/notification-details.component';
import { CommissionComponent } from './commission/commission.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { MoazedatComponent } from './moazedat/moazedat.component';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'commission', component: CommissionComponent
  },
  {
    path: 'all-notification', component: AllNotificationComponent
  },
  {
    path: 'articles', component: ArticlesComponent
  },
  {
    path: 'moazedat', component: MoazedatComponent
  },
  {
    path: 'news-detail/:id', component: NewsDetailsComponent
  },
  {
    path: 'gallery-detail/:id', component: GalleryDetailsComponent
  },
  {
    path: 'article-detail/:id', component: ArticleDetailsComponent
  },
  {
    path: 'notification-detail/:id', component: NotificationDetailsComponent
  },
  {
    path: 'team', component: TeamComponent
  },
  {
    path: 'staff', component: StaffComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}

