import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { StoreService } from "./store.service";

@Injectable({
  providedIn: 'root',
})
export class SocketService   {

  public socket = io("http://192.168.178.14:8001");

  constructor(public store:StoreService) {

    this.socket.emit("token",{token:"sekrit"});

  }

  public emit(event:string,message:any) {

    const token = this.store.getToken();

    this.socket.emit(event,{token:token,message:message})

  }

  // public sendMessage(message:any) {
  //   this.socket.emit('message', message);
  // }

  // public getNewMessage = () => {
  //   this.socket.on('message', (message) =>{
  //     this.message$.next(message);
  //   });
    
  //   return this.message$.asObservable();
  // };

}