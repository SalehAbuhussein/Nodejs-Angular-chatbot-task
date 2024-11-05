import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatHistory, PostChatbotBody } from '../types/chatbot.types';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  chatbotHistory: ChatHistory[] = [];

  constructor(public http: HttpClient) { }

  /**
   * Get chatbot api text response
   * 
   */
  postChatbotTextResponse(body: PostChatbotBody) {
    return this.http.post('/api/chatbot/text', { body });
  }
}
