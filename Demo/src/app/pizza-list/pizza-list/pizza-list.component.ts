import { Component, OnInit } from '@angular/core';
// import { Item } from './item';
import { Pizza } from '../../model/pizza';
import { PizzaServiceService } from '../../service/pizza-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})

export class PizzaListComponent implements OnInit {

  pizzaList: Pizza[] = [];
  selectedPizza: Pizza = new Pizza('', '', '');

  constructor(private pizzaService: PizzaServiceService) {
  }

  ngOnInit() {
      this.ListPizza();
      console.log("on init updatePizzaList: " + this.updatePizzaList);
    };

  updatePizzaList(item: any){
    console.log("updatePizzaList:" + item);
    this.ngOnInit();
    console.log("updatePizzaList: pizzaList" + this.pizzaList);
  }

  ListPizza(){
      console.log(this.updatePizzaList);
      this.pizzaService.findAll().subscribe(data=> {this.pizzaList = data})
      console.log("from ListPizza" + this.pizzaList);
    }

  onTableClick(pizza:any, index:any){
    console.log(pizza);
    this.selectedPizza = pizza;
    }

  }

