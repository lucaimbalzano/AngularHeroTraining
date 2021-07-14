import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] =[];

  addMessages(message : string){
    this.messages.push(message);
  }

  clearMessages(){
    this.messages = [];
  }

  constructor() { }
}
