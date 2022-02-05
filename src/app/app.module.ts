import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketService } from './services/socket.service';
import { DataService } from './services/data.service';
import { StoreService } from './services/store.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { HTTP404Component } from './pages/http404/http404.component'

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    NavTopComponent,
    HTTP404Component,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [SocketService,DataService,StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
