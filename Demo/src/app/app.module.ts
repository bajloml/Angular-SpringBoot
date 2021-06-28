import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list/pizza-list.component';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaServiceService } from './service/pizza-service.service';
import { SelectedPizzaComponent } from './selected-pizza/selected-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaFormComponent,
    SelectedPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
