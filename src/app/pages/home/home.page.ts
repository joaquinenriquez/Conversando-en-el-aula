import { ChatRoom } from './../../model/classes/chat-room';


import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from 'src/app/components/chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chatRoom1: ChatRoom = new ChatRoom();
  chatRoom2: ChatRoom = new ChatRoom();

  constructor(private modalController: ModalController) {}

  openChat() {
    this.modalController.create({
        component: ChatComponent,
        componentProps: {
          chatRoomName: 'asdf'
        }
      }
    ).then((modal) => modal.present());
  }
}
