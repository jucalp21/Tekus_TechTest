import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AddModifySubscriberComponent } from './add-modify-subscriber/add-modify-subscriber.component';
import { ListSubscribersComponent } from './list-subscribers/list-subscribers.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    PagesComponent,
    AddModifySubscriberComponent,
    ListSubscribersComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
