import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  constructor() { }

  activeLink:string = "featured"; 
  links:string[] = ["featured","Twitter","Twitch","Youtube","reddit"]
  
  ngOnInit(): void {
  }

}
