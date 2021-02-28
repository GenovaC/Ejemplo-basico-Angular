import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})

export class AdditemComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private router:Router, private itemService:ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.quantity = this.quantity;
    item.price = this.price;
    item.completed = false;

    this.itemService.addItem(item);
    this.router.navigate(['/']);
  }

}
