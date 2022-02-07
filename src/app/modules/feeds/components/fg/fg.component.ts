import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-fg',
  templateUrl: './fg.component.html',
  styleUrls: ['./fg.component.scss']
})
export class FgComponent implements OnInit {

  public activeLink:any;
  public links:string[] = ['Reddit','Youtube','Twitch','Websites','Events','#OSINT'];

  constructor() { }

  ngOnInit(): void {
  }

}
