import { Component, OnInit, ViewChild } from '@angular/core';
import { GameService } from './game.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @ViewChild('gameSizeSelect', {static: false}) gameSizeForm: NgForm;
  cards = []
  base: number;
  gameSize = [12, 20, 40];
  defaultSize = 12;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
  }

  setGameSize(){
    this.base = this.gameSizeForm.value.size/2;
    this.cards = this.game.setCards(this.base);
    this.base = this.cards.length;
    this.cards = this.game.shuffleCards(this.cards);
  }

}
