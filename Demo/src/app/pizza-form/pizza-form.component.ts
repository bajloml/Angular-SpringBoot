import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../model/pizza';
import { PizzaServiceService } from '../service/pizza-service.service';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent {

  pizza: Pizza;
  public name:string;
  public ingredients:string;
  public _links:string;

  constructor( private route: ActivatedRoute, private router: Router, private pizzaService: PizzaServiceService) {
    this.pizza = new Pizza('', '', '');
    this.name='';
    this.ingredients='';
    this._links = '';
  }

  onSubmit() {
    this.pizza = new Pizza(this.name, this.ingredients, this._links);
    console.log('name: ',  this.name)
    console.log('ingredients: ', this.ingredients)
    this.pizzaService.save(this.pizza).subscribe(result => this.gotoUserList());

  }

  gotoUserList() {
    this.router.navigate(['/api/pizzas']);
  }
}
