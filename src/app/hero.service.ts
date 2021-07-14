import { Injectable } from '@angular/core';
import { HEROES } from './heroes.data';
import { Hero } from './heroes';
import { Observable, of } from 'rxjs';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessages('**** Message service fetched ****');
    return heroes;
  }
}
