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
  checkCount: number = 0;

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

  checkValue($event){
    if (this.checkCount < 1){
      this.game.cardHold = $event;
      this.checkCount++;
    } else if (this.checkCount == 1){
      if (this.game.cardHold == $event){
        console.log("success");
        this.game.saveCard.next();
      }
      this.checkCount++;
    } else {
      this.checkCount = 0;
      this.game.resetCards.next();
      this.game.cardHold = 0;
    }
  }

}
