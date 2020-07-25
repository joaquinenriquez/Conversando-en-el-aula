import { Timestamp } from '@firebase/firestore-types';

export class Message {
    userName: string;
    content: string;
    date: Timestamp;
}
