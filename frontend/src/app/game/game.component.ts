import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cards = []
  base: number;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.cards = this.game.setCards(10);
    this.base = this.cards.length;
    this.cards = this.game.shuffleCards(this.cards);
    console.log(this.cards);
  }
}
