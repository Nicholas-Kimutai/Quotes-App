import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote!:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  incrementLikes(){
    let like = this.quote?.likes;
    like++;
    this.quote.likes = like;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
