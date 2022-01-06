import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FgComponent } from './components/fg/fg.component';

@NgModule({
  declarations: [
    FeedsComponent,
    FgComponent
  ],
  imports: [
    CommonModule,
    FeedsRoutingModule
  ]
})
export class NewsModule { }
