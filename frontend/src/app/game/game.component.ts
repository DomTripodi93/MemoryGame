import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { GameService } from './game.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  @ViewChild('gameSizeSelect', {static: false}) gameSizeForm: NgForm;
  cards: number[] = [];
  subscriptions: Subscription[] = [];
  base: number;
  gameSize: number[] = [12, 20, 40];
  defaultSize: number = 12;
  found = 0;
  success = false;

  constructor(
    private game: GameService
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.game.saveCard.subscribe(()=>{
      this.found += 2;
      if (this.found == this.base){
        this.success = true;
      }
    }))
  }

  setGameSize(){
    this.base = 0;
    this.game.resetAll.next();
    this.base = this.gameSizeForm.value.size/2;
    this.cards = this.game.setCards(this.base);
    this.base = this.cards.length;
    this.cards = this.game.shuffleCards(this.cards);
  }

  checkValue($event){
    if (this.game.checkCount < 1){
      this.game.cardHold = $event;
      this.game.checkCount++;
    } else if (this.game.checkCount == 1){
      if (this.game.cardHold == $event){
        this.game.checkCount = 0;
        this.game.saveCard.next();
      } else{
        this.game.checkCount++;
      }
    } else {
      this.game.checkCount = 0;
      this.game.cardHold = 0;
      this.checkValue($event);
    }
  }

  reset(){
    this.success = false;
    this.setGameSize();
  }

  ngOnDestroy(){

  }

}
