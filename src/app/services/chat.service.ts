import { Message } from 'src/app/model/classes/message';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private dataService:DataService) { }

  getMessages(chatRoomName: string): Observable<any> {
    return this.dataService.getAll2(chatRoomName);
  }

  setMessage(chatRoomName: string, message: Message) {
    return this.dataService.create(chatRoomName, message);
  }

}
