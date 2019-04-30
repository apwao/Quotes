import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [new Quote("Rumi", "Hello", "Nameeee", 0,0, new Date())]

  constructor() { }
  deleteQuote(removeQuote, index){
    if (removeQuote){
      let toDelete= confirm(`${this.quotes[index].author}`);
        if (toDelete){
          this.quotes.splice(index,1);
        }
    }
  }
  likeQuote(likeQuote, index){
        if (likeQuote){
          this.quotes[index].like +=1;
        }
    }

    dislikeQuote(dislikeQuote, index){
      if (dislikeQuote){
        this.quotes[index].dislike +=1;
      }
    }
    quoteDetails(index){
      this.quotes[index].showDescription=!this.quotes[index].showDescription;
    }
  
  ngOnInit() {
  }

}
