import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pizza } from '../model/pizza';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PizzaServiceService {

  private pizzaUrl: string;

  constructor(private http: HttpClient) {
    this.pizzaUrl = 'http://localhost:8080/api/pizzas';
    //this.pizzaUrl = 'http://172.29.3.209:8080/pizzas';
  }

  public findAll(): Observable<Pizza[]> {
    // return this.http.get<Pizza[]>(this.pizzaUrl);
    return this.http.get<GetResponse>(this.pizzaUrl).pipe(map(response => response._embedded.pizzas))
  }

  public save(pizza: Pizza) {
    return this.http.post<Pizza>(this.pizzaUrl, pizza);
  }

  public delete(url:any){
    return this.http.delete(url).subscribe(data=>console.log(data));
  }

  public edit(url:any, newPizza:Pizza){
    return this.http.put(url, newPizza).subscribe(data=>console.log(data));
  }
}

interface GetResponse{
  _embedded:{
    pizzas: Pizza[];
  }
}
