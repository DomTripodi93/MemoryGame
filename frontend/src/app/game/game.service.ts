import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable({providedIn: 'root'})
export class GameService {

    getAllCards(){

    }

    shuffleCards(cards) {
        let cardsLeft = cards.length
        let cardSwitch = 0
        let cardHold;
    
        while (cardsLeft--) {
            cardSwitch = Math.floor(Math.random() * (cardsLeft+1));
            cardHold = cards[cardsLeft];
            cards[cardsLeft] = cards[cardSwitch];
            cards[cardSwitch] = cardHold;
        }
    
        return cards;
    }

    setCards(numberOfCards){
        let cardsHold = _.range(1,52);
        cardsHold = this.shuffleCards(cardsHold);
        cardsHold = cardsHold.slice(0, numberOfCards);
        cardsHold = cardsHold.concat(cardsHold)
        return cardsHold
    }
}