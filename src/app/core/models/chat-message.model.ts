export interface ChatMessage {
  sender: 'user' | 'ai';
  content: string;
}