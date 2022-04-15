import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("Nick","Steve Jobs","You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",490,4,new Date(2020,1,12)),
    new Quote("Nick","Henry David Thoreau","Go confidently in the direction of your dreams! Live the life you've imagined.",309,5,new Date(2021,6,17)),
    new Quote("Nick","Nelson Mandela","The greatest glory in living lies not in never falling, but in rising every time we fall.",353,10, new Date(2012,12,12))
  ];

addNewQuote(quote:any){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;

  this.quotes.push(quote);
}

deleteQuote(isComplete:any,index:any){
  if(isComplete){
    let toDelete = confirm(`Are you sure you want to delete a quote by ${this.quotes[index].author}?`)
    if(toDelete){
      this.quotes.splice(index,1);
    }
  }

}



  constructor() { }

  ngOnInit(): void {
  }

}
