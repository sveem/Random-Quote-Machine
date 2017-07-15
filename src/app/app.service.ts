import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable() export class QuotesService {

  constructor( private http: Http) { }

  getQuotes() {
    const url1 = "http://api.icndb.com/jokes/random?escape=javascript"
    
    return this.http.get(url1)
      .map((res : Response)  => {
      let data = res.json();
      console.log('Data from app.service', data);
      return data;
    });
  }
}