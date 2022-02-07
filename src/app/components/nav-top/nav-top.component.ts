import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

  public isLoggedIn:boolean = false;

  constructor(public data:DataService) {

    data.isLoggedIn.subscribe(isLoggedIn=>{
      this.isLoggedIn = isLoggedIn;
    })

  }

  ngOnInit(): void {
  }

}
