import { Injectable } from '@angular/core';
import { WebSocketsService } from './web-sockets.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public ws: WebSocketsService) { }

  sendMessage(message: string): void {
    const payload = {
      from : 'Cristian',
      message
    };

    this.ws.emit('messageEvent', payload);
  }

  getMessages() {
    // Mando el nombre del evento que esuchare
    return this.ws.listen('new-message');
  }
}
