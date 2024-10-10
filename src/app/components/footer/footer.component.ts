import { Component } from '@angular/core';
import { WebSocketsService } from 'src/app/services/web-sockets.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public webSocketsService: WebSocketsService) {}
}
