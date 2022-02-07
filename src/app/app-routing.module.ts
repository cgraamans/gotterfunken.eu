import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP404Component } from './pages/http404/http404.component'
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { path: 'news', loadChildren: () => import('./modules/feeds/feeds.module').then(m => m.NewsModule) },
//  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: '', component:IndexComponent },
  
  { path: '**', component:HTTP404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }