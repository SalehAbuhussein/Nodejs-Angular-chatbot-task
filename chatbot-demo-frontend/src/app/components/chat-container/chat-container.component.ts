import { Component } from '@angular/core';

import { BotChatBoxComponent } from '../bot-chat-box/bot-chat-box.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { UserChatBoxComponent } from '../user-chat-box/user-chat-box.component';

import { ChatbotService } from '../../services/chatbot.service';

import { ChatHistory } from '../../types/chatbot.types';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [
    UserChatBoxComponent,
    BotChatBoxComponent,
    SpinnerComponent
  ],
  templateUrl: './chat-container.component.html',
  styleUrl: './chat-container.component.scss'
})
export class ChatContainerComponent {
  disabled = false;
  isLoading = false;

  constructor(public chatbotService: ChatbotService) {}

  /**
   * Add user-message to chat history
   * 
   * @param { Event } event 
   */
  addUserPromptToChatHistory(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    const result: ChatHistory = {
      role: 'user',
      parts: [{ text: (event.target as HTMLInputElement).value }],
    };

    (event.target as HTMLInputElement).value = '';

    // Save user prompt message to chatbotHistory
    this.chatbotService.chatbotHistory = [ ...this.chatbotService.chatbotHistory, result ];

    // Fire api request to get AI model response and add it to chatbot history
    this.addApiResponseToChatHistory(value);
  }

  /**
   * Make api request to fetch the model response the chat
   * And add it to chatbotHistory in the chatbot service
   * 
   * @param { string } value input value 
   */
  addApiResponseToChatHistory(value: string) {
    this.disabled = true;
    this.isLoading = true;

    this.chatbotService.postChatbotTextResponse({
      chatHistory: this.chatbotService.chatbotHistory,
      message: value
    }).subscribe((value) => {
      const message = value as { Message: string };
      this.isLoading = false;

      this.chatbotService.chatbotHistory = [ ...this.chatbotService.chatbotHistory, {
        role: 'model',
        parts: [{ text: message.Message }]
      } ];
      this.disabled = false;
    })
  }
}
