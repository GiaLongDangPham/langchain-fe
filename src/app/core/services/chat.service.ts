import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private API_URL = 'http://localhost:8080/api/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string, sessionId: string): Observable<any> {
    return this.http.post(this.API_URL, {
      sessionId: sessionId,
      message: message
    });
  }
}
