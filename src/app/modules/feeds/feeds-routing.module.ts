import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FgComponent } from './components/fg/fg.component';

const routes: Routes = [
  { path: '', component: FgComponent },
  { path: 'feeds', component: FeedsComponent },
  // { path: 'blog', component: FeedsComponent },
  // { path: 'about', component: FeedsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedsRoutingModule { }