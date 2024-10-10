import { Component } from '@angular/core';
import { WebSocketsService } from './services/web-sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-basic-sockets';
  constructor(
    private webSocketsService: WebSocketsService,
  ) {}


}
