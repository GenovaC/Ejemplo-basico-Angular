import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  items:Item[] = [
    {
      id: 1,
      title: 'Jugo',
      price: 35,
      quantity: 2,
      completed: false
    },
    {
      id: 2,
      title: 'Pan',
      price: 50,
      quantity: 5,
      completed: false
    }
  ];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item: Item){
    this.items.unshift(item);
  }

}
