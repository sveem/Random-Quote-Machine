import { Component, OnInit } from '@angular/core';
import { QuotesService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  quotes = '';

  constructor(private quotesService: QuotesService) { }

  ngOnInit() { }

  showQuotes() {
    this.quotesService.getQuotes().subscribe(quotes => {
      console.log(quotes.value.joke);	
      this.quotes = quotes.value.joke;
    }); 
  }
}
