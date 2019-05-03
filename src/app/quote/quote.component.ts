import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
//import { globalAgent } from 'http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  submitted = false;
  quotes = [
    new Quote("Rumi", "Stop acting so small. YOu are the universe in ecstatic motion", "Purity", 0,0, new Date(2018,3,14)),
    new Quote("Rumi","The wound is the place where the light enters you", "Grace",0,0,new Date(2018,6,3)),
    new Quote("Coco", "A woman should have ropes and ropes of pearls", "Purity", 0,0, new Date(2019,4,7)),
    new Quote("anonymous","Only the dead will never die","Sandra",0,0, new Date(2018,1,5)),
  ]
  
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete= confirm(`Are you sure you want to delete ${this.quotes[index].author} ?`);
        if (toDelete){
          this.quotes.splice(index,1);
        }
    }
  }
  addNewQuote(quote){
    //this.submitted = true;
    //let quoteLength = this.quotes.length;
    //quote.author = quoteLength+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
    
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

    
  constructor() { }
  ngOnInit() {
  }

}
