import { Injectable } from '@angular/core';
import { UpdateEvent } from 'src/app/budget-item-list/budget-item-list.component';
import { BudgetItem } from '../models/budget-item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: BudgetItem[] = []

  constructor() {
    this.loadState();
  }

  getItems() {
    return this.items;
  }

  addItem(newItem: BudgetItem) {
    this.items.push(newItem);
    //this.totalBudget += newItem.amount;
    this.saveState();
  }

  deleteItem(item: BudgetItem) {
    let idex = this.items.indexOf(item);
    this.items.splice(idex,1);
    // this.totalBudget -= item.amount;
    this.saveState();
  }

  updateItem(updateEvent: UpdateEvent) {
    this.items[this.items.indexOf(updateEvent.old)] = updateEvent.new;

    // this.totalBudget -= updateEvent.old.amount;
    // this.totalBudget += updateEvent.new.amount;

  }

  saveState(){
    //saves to localStorage
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  loadState() {
    //Retrieves from localStorage
    try {
      const ItemInStorage = JSON.parse(localStorage.getItem('items'));

      this.items.length = 0 //clears array while keeping reference.
      this.items.push(...ItemInStorage);

    } catch (e) {
      console.log('error retrieving items from storage');
      console.log(e);
    }

    //change yo mongoDB later
  }


}
