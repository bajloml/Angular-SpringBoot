import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza-list/pizza-list/pizza-list.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';

const routes: Routes = [
  { path: 'api/pizzas', component: PizzaListComponent },
  { path: 'api/addpizza', component: PizzaFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
