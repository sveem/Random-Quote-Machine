import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() export class QuotesService {

  constructor( private http: Http) { }

  getQuotes(category) {
    let url = `http://api.icndb.com/jokes/random`;
    let search = `?limitTo=[${category}]`
   
    if (category !== 'random') {
      url += search;
    }
 
    console.log('URL=>', url)
    return this.http.get(url)
      .map((res : Response)  => {
      let data = res.json();
      console.log('Data from app.service', data);
      return data;
    });
  }

  tweets() {
    const twitter = "https://twitter.com/intent/tweet?text="
  }
}