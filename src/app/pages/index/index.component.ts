import { Component, OnInit } from '@angular/core';
import { MatGridListModule, MatGridList } from '@angular/material/grid-list';
import { EventsComponent } from 'src/app/components/events/events.component';
import { NetworkComponent } from 'src/app/components/network/network.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
