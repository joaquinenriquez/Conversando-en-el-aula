import { ChatRoom } from './../../model/classes/chat-room';
import { AuthService } from './../../services/auth.service';
import { ChatService } from './../../services/chat.service';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';
import { Message } from 'src/app/model/classes/message';
import { isNullOrUndefined } from 'util';
import Timestamp = firestore.Timestamp;
import { firestore } from 'firebase';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  chatRoom: ChatRoom;
  currentUser: string;
  currentMessage: string = '';
  @ViewChild(IonContent) content: IonContent;
  recibedMessageAudio = new Audio('../../assets/sounds/newMessage.mp3');
  sendedMessageAudio = new Audio('../../assets/sounds/sendMessage.mp3');

  messages: Message [];

  constructor(private navParams: NavParams, 
              private modalController: ModalController,
              private chatService: ChatService,
              private authService: AuthService) {
            }

  ngOnInit() {
    this.currentUser = isNullOrUndefined(this.authService.currentUser.displayName) ? 'anónimmo' : this.authService.currentUser.displayName;
    this.chatRoom = this.navParams.get('chatRoom');
    this.chatService.getMessages(this.chatRoom.name).subscribe(messages => {
      this.messages = messages as Message[];
      if (!isNullOrUndefined(this.messages[this.messages.length -1].userName) && this.currentUser != this.messages[this.messages.length -1].userName) {
        console.log(this.currentUser, this.messages[this.messages.length-1]);
        this.recibedMessageAudio.play();
      }
      this.scrollToBottom();
    });
  }

  ngAfterViewInit(): void {
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(()=>{this.content.scrollToBottom();},100); 
  }

  closeChat() {
    this.modalController.dismiss();
  }

  sendMessage() {
    let newMessage: Message = new Message();
    newMessage.content = this.currentMessage;
    newMessage.date = Timestamp.now();
    newMessage.userName = this.currentUser;
    this.chatService.setMessage(this.chatRoom.name, newMessage);
    this.currentMessage = '';
    this.sendedMessageAudio.currentTime = 2;
    this.sendedMessageAudio.play();
  }

}
