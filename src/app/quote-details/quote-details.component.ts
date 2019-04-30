import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
   @Input('quotes') quote:Quote;
   @Output() removeQuote = new EventEmitter<boolean>();
   @Output() addQuote = new EventEmitter();
  //  @Output() likeQuote = new EventEmitter<boolean>();
  //  @Output() dislikeQuote = new EventEmitter<boolean>();
  
  Dislike(quote:Quote){
      //this.dislike.emit(dislike);
      quote.dislike +=1
    }
  Delete(remove:boolean){
       this.removeQuote.emit(remove);
    }
  Like(quote:Quote){
    //  this.likeQuote.emit(like);
    quote.like += 1
    }
  constructor() { }
  ngOnInit() {
  }
}
