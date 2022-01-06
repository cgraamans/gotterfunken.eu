import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from './store.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(store: StoreService, socket:SocketService) { 

    socket.emit("test",{test:true});

  }

}
