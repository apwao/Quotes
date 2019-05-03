import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
   @Input('quotes') quote:Quote;
   @Output() isComplete = new EventEmitter<boolean>();
   quoteDelete(complete:boolean){
     this.isComplete.emit(complete);
   }
  
 Dislike(quote:Quote){
        quote.dislike +=1
   }
 
  Like(quote:Quote){
     quote.like += 1
    }
  constructor() { }
  ngOnInit() {
  }
}
