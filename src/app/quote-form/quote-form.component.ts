import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote("","","",0,0, new Date());
    @Output() output = new EventEmitter<Quote>();
    submitQuote(){
      //alert("Quote is being added")
      this.output.emit(this.newQuote)
      this.newQuote = new Quote("","","",0,0,new Date());
    }
    constructor() { }
    ngOnInit() {
  }


}

