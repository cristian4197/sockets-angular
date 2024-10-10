import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  public socketStatus = false;

  constructor(private socket: Socket) {
    this.checkStatus();
  }

  checkStatus(): void {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
  }

  emit(event: string, payload?: any, callback?: Function): void {
    // emit('nameEvent', payload, callback);
    console.log('Emitiendo evento');
    
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    // Responsable de esuchar eventos desde el servidor
    // En este caso tipado pero puede ser cualquier otro tipo
    return this.socket.fromEvent<Message>(event);
  }
}
