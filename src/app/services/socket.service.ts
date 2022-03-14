import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jwt from "jsonwebtoken";

import { io } from "socket.io-client";
import { StoreService } from "./store.service";
@Injectable({
  providedIn: 'root',
})
export class SocketService   {

  public socket = io("localhost:8001");
  private sessionId:BehaviorSubject<string> = new BehaviorSubject("");

  constructor(public store:StoreService) {

    this.socket.on("session",((id:string)=>{
      console.log("session",id);
      this.sessionId.next(id);
    }));

  }

  private verifyToken(key:string,token:string) {

    return new Promise((resolve,reject)=>{
        jwt.verify(token, key, function(err, decoded) {
            if(err) {
                reject(err);
                return;
            }
            resolve(token);
          });
    
    })

}

  public on(event:string,callback:any) {

    this.socket.on(event,async (...args)=>{

      if(args.length !== 1) return;
      const message = await this.verifyToken(this.sessionId.getValue(),args[0])
        .catch(e=>{
          console.log(e);
          return;
        });

      callback(message);
      return;

    });

  }

  public emit(event:string,message:any) {

    // this.socket.emit(event,jwt.sign(message,this.sessionId.getValue()));

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