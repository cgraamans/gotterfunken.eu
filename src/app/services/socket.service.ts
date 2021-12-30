import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";

Injectable({
  providedIn: 'root',
})
export class SocketService   {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {

    this.socket.on("user:init",message=>{
      console.log(message);
    });
    this.socket.on("items",message=>{
      console.log(message);
    });

  }

  socket = io("http://192.168.178.14:8001");

  public sendMessage(message:any) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
}