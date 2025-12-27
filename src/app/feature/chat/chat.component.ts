import { Component } from '@angular/core';
import { ChatMessage } from 'src/app/core/models/chat-message.model';
import { ChatService } from 'src/app/core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  messages: ChatMessage[] = [];
  input = '';
  sessionId = 'student-1'; // có thể gắn theo user login

  constructor(private chatService: ChatService) {}

  send() {
    if (!this.input.trim()) return;

    // push user message
    this.messages.push({
      sender: 'user',
      content: this.input
    });

    const question = this.input;
    this.input = '';

    this.chatService.sendMessage(question, this.sessionId)
      .subscribe(res => {
        this.messages.push({
          sender: 'ai',
          content: res.reply
        });
      });
  }
}
