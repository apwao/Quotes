import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from "../quote";
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() removeQuote = new EventEmitter<boolean>();
  @Output() likeQuote = new EventEmitter<boolean>();
  @Output() dislikeQuote = new EventEmitter<boolean>();
  
  quoteDelete(remove:boolean){
      this.removeQuote.emit(remove);
    }
  quoteLike(like:boolean){
      this.likeQuote.emit(like);
    }
  quoteDislike(dislike:boolean){
      this.dislikeQuote.emit(dislike);
    }
  constructor() { }
  ngOnInit() {
  }

}
