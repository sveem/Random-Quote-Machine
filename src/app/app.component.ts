import { Component, OnInit } from '@angular/core';
import { QuotesService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  quotes = '';
  tweets = "https://twitter.com/intent/tweet?text=";

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes = 'Welcome to Chuck Norris Quote Generator!';
   }

  showQuotes() {
    this.quotesService.getQuotes().subscribe(quotes => {
      this.quotes = quotes.value.joke;
      this.tweets = this.tweets + this.quotes;
    }); 
  }

  sendTweet() {
    return this.tweets;
  }
}
