import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store.service';
import { SocketService } from './socket.service';

import { discord,reddit,youtube,twitter } from 'ngx-bootstrap-icons';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isBannerMinimized:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  static icons = {
    discord,
    reddit,
    youtube,
    twitter
  };

  constructor(store: StoreService, socket:SocketService) { 

    socket.emit("test",{test:true});

  }

  static getIcons() {
    return DataService.icons;
  }

}
