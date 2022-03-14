import { Component, OnInit } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  private URLBanner:BehaviorSubject<string> = new BehaviorSubject('http://localhost:8001/banners/bannerNewsEU.png')
  public icons = DataService.getIcons();

  public isMinimized:boolean = false;

  constructor(private Data:DataService) { 

    this.Data.isBannerMinimized.subscribe(val=>{
      this.isMinimized = val;
    });

  }

  ngOnInit(): void {
  }

  getBanner() :string {
    return this.URLBanner.value;
  }

}
