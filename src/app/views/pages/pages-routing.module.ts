import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModifySubscriberComponent } from './add-modify-subscriber/add-modify-subscriber.component';
import { ListSubscribersComponent } from './list-subscribers/list-subscribers.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: '', component: ListSubscribersComponent },
    { path: 'showSubs', component: ListSubscribersComponent },
    { path: 'addModifySubs', component: AddModifySubscriberComponent }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
