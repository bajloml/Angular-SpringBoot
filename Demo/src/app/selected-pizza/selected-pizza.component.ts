import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../model/pizza';
import { PizzaServiceService } from '../service/pizza-service.service';
import { PizzaListComponent } from '../pizza-list/pizza-list/pizza-list.component';

@Component({
  selector: 'app-selected-pizza',
  templateUrl: './selected-pizza.component.html',
  styleUrls: ['./selected-pizza.component.css']
})

export class SelectedPizzaComponent implements OnInit {

  hidden:boolean = true;
  links: Object = new Object;
  newName:string='';
  newIngredients:string='';

  @Input() itemSelected:Pizza = new Pizza('', '', '');

  //@Input() updatePizzaList !: boolean;
  @Input() updatePizzaList !: boolean;
  @Output() updatePizzaListChange = new EventEmitter<boolean>();

  // constructor(private pizzaListComponent: PizzaListComponent, private router: Router, private pizzaService: PizzaServiceService){}
  constructor(private pizzaService: PizzaServiceService){}


  ngOnInit(): void {
  }

  clickDelete(){

    this.links = Object(this.itemSelected._links);
    this.pizzaService.delete(((Object.values(this.links)[0])).href);
    this.hidden = !(this.itemSelected.name === '');
    this.updatePizzaList = true;

    sleep(100); // wait database req to be fullfilled
    this.updatePizzaListChange.emit(this.updatePizzaList);
    console.log("update pizza list from delete " + this.updatePizzaList);
    this.updatePizzaList = false;
    this.itemSelected = new Pizza('', '', '');

  }

  clickEdit(){

    this.hidden = !this.hidden;
    this.newName = this.itemSelected.name;
    this.newIngredients = this.itemSelected.ingredients;
  }

  clickSubmit(){
    var pizza = new Pizza(this.newName, this.newIngredients, '');
    this.links = Object(this.itemSelected._links);
    this.pizzaService.edit(((Object.values(this.links)[0])).href, pizza);
    this.hidden = !this.hidden;

    sleep(100); // wait database req to be fullfilled
    this.updatePizzaList = true;
    this.updatePizzaListChange.emit(this.updatePizzaList);
    console.log("update pizza list from submit " + this.updatePizzaList);
    this.updatePizzaList = false;
  }
}

function sleep(milliseconds:number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
