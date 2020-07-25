import { ChatRoom } from './../../model/classes/chat-room';


import { Component } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ChatComponent } from 'src/app/components/chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chatRoomA: ChatRoom = new ChatRoom();
  chatRoomB: ChatRoom = new ChatRoom();

  constructor(private modalController: ModalController,
             private loadingController: LoadingController) {

    this.chatRoomA.name = 'PPS4A';
    this.chatRoomA.description = 'PPS División 4A';
    this.chatRoomA.ppalColor = "chatrooma";
    this.chatRoomA.icon = "assets/svg/classrooma.svg";
    
    this.chatRoomB.name = 'PPS4B';
    this.chatRoomB.description = 'PPS División 4B';
    this.chatRoomB.ppalColor = "chatroomb";
    this.chatRoomB.icon = "assets/svg/classroomb.svg";
  }

  openChat(selectedChatRoom: ChatRoom) {
    this.modalController.create({
        component: ChatComponent,
        componentProps: {
          chatRoom: selectedChatRoom
        }
      }
    ).then((modal) => {
      modal.present();
      this.showLoading();
    });
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: '<ion-img src="assets/img/loading.gif" alt="loading..."></ion-img>',
      cssClass: 'loading',
      translucent: true,
      showBackdrop: false,
      spinner: null,
      duration: 3000
    });

    loading.present();
  }




}
