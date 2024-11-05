import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChatbotService } from './services/chatbot.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatbot-demo-frontend';

  constructor(public chatbotService: ChatbotService) {}
}
