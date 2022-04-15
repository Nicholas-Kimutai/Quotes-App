import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote("Nick","Steve Jobs","You cant connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",24,2,new Date(2022,1,1)),
    new Quote("Nick","Henry David Thoreau","Go confidently in the direction of your dreams! Live the life you've imagined.",2,0,new Date(2022,1,31)),
    new Quote("Nick","Nelson Mandela","The greatest glory in living lies not in never falling, but in rising every time we fall.",5,5, new Date(2015,12,12))
  ];

  get sortQuotes(){
    return this.quotes.sort((a,b) => {
       return b.likes - a.likes;
     })
   }

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
