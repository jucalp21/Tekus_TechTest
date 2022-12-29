import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./auth/auth.module`).then(md => md.AuthModule)
  },
  {
    path: 'subs',
    loadChildren: () => import('./pages/pages.module').then(md => md.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
