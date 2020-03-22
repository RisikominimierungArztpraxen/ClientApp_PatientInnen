import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { QueueComponent } from './pages/queue/queue.component';
import { NotificationComponent } from './pages/notification/notification.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'queue', component: QueueComponent },
  { path: 'notification', component: NotificationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
