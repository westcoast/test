import { Component } from '@angular/core';
import { orders } from './orders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filter-order';
  orderArray = [];
  orders = orders;

  addOrder(value) {
    console.log(JSON.parse(value));
    this.orders.push(JSON.parse(value));
    console.log(orders);
    // {"name": "pippo", "price": "1200", "date": "01/01/1200", "desccription": ""}
  }
}
