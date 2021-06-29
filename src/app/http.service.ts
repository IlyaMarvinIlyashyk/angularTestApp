import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // private here refers to encapsulation, making it clear that it should not be accessed from anywhere else 
  // i guess typescript stuff ?

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
