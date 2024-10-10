import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/interfaces/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  public textSend:string = '';
  public textReceived:Message[] = [];

  private subscription = new Subscription();

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.subscription = this.chatService.getMessages().subscribe((payload: Message) => {
      console.log(payload);
      this.textReceived.push(payload);
    })
  }

  send() {
    if(!this.textSend){ return; }
    this.chatService.sendMessage(this.textSend);   
    this.textSend = '' ;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
