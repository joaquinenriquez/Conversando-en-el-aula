import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private dataService:DataService) { }

  getMessages(chatRoomName: string): Observable<any> {
    return this.dataService.getOne2('chat_rooms', '5VbymdGuq9VDDoN7lITH');
  }


}
