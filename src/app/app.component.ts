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
  title = 'Categories';
  category = 'random';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() {
    this.quotes = 'Welcome to Chuck Norris Quote Generator!';
   }

  showQuotes() {
    this.quotesService.getQuotes(this.category).
      subscribe(quotes => {
      this.quotes = quotes.value.joke;
      this.tweets = this.tweets + this.quotes;
    }); 
  }

  getCategory (event) {
    this.title = event.target.innerText
    this.category = event.target.innerText.toLowerCase();
  }

  sendTweet() {
    return this.tweets;
  }
}
