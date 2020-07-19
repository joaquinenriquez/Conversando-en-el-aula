import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Message } from 'src/app/model/classes/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  chatRoomName: string;
  messages: Message[];
  currentMessage: string;

  constructor(private navParams: NavParams, 
              private modalController: ModalController,
              private chatService: ChatService) {}

  ngOnInit() {
    this.chatRoomName = this.navParams.get('chatRoomName');
    console.log('asf');
    this.chatService.getMessages('chat_rooms').subscribe(asd => console.log(asd));
  }

  closeChat() {
    this.modalController.dismiss();
  }

  sendMessage() {
    // this.messages.push('asd');
    this.currentMessage = '';
  }

}
