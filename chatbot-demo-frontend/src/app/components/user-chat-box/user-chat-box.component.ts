import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-chat-box',
  standalone: true,
  imports: [],
  templateUrl: './user-chat-box.component.html',
  styleUrl: './user-chat-box.component.scss'
})
export class UserChatBoxComponent {
  @Input({ required: true }) message = '';
}
