import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketService } from './services/socket.service';
import { DataService } from './services/data.service';
import { StoreService } from './services/store.service';
import {MatGridListModule} from '@angular/material/grid-list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { HTTP404Component } from './pages/http404/http404.component'
import { IndexComponent } from './pages/index/index.component'

import { BannerComponent } from './components/banner/banner.component';

import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { EventsComponent } from './components/events/events.component';
import { NetworkComponent } from './components/network/network.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HTTP404Component,
    BannerComponent,
    IndexComponent,
    EventsComponent,
    NetworkComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatSlideToggleModule,
    NgxBootstrapIconsModule.pick(DataService.icons)
    
  ],
  providers: [SocketService,DataService,StoreService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
