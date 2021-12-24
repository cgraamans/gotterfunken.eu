import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket:Socket = io('http://pluto:8001');

  constructor() { 
    
    console.log('service init');
    this.socket.on("user:init",(args)=>{

        console.log(args);

    });

  }

}
