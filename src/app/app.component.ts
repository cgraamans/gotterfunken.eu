import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socket:SocketService, private data:DataService){}
  title = 'eu-int-angular';

}
