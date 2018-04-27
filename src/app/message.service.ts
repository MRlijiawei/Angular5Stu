import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages: string = '';

  replaceMsg(message: string) {
    this.messages = message;
  }

  clearMsg() {
    this.messages = '';
  }

}
