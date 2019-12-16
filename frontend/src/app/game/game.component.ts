import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cards = [1,2,3,4,5,6,7,8,9,10]

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.cards = this.game.setCards(10);
    this.cards = this.game.shuffleCards(this.cards);
    console.log(this.cards);
  }
}
