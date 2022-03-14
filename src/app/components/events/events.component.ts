import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  activeLink:string = "today"; 
  links:string[] = ["today","tomorrow","this week","next week"]

  ngOnInit(): void {
  }

}
