import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bot-chat-box',
  standalone: true,
  imports: [],
  templateUrl: './bot-chat-box.component.html',
  styleUrl: './bot-chat-box.component.scss'
})
export class BotChatBoxComponent {
  @Input({ required: true }) message = '';
}
