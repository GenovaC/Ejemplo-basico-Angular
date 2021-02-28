import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  total:number = 0;
  items: Item[] = [];

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    /*this.items = [
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
    ];*/
    this.items = this.itemService.getItems();
    this.getTotal();
  }

  deleteItem(item: Item){
    this.items = this.items.filter(i => i.id != item.id);
    this.getTotal();
  }

  getTotal(){
    this.total = this.items.filter(item => !item.completed)
                          .map(item => item.quantity * item.price)
                          .reduce( (acc, item) => acc += item, 0);
  }

  toggleItem(item: Item){
    this.getTotal();
  }
}
