import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private socket:SocketService){}
  title = 'eu-int-angular';
}
