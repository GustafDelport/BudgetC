import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';
import { ItemsService } from 'src/shared/services/items.service';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  BudgetItems: BudgetItem[];
  totalBudget: number = 0;

  constructor(private itemService: ItemsService) {
    this.loadData(); 
  }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.itemService.addItem(newItem);
  }

  deleteItem(item: BudgetItem) {
    this.itemService.deleteItem(item);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    this.itemService.updateItem(updateEvent);

    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

  loadData(){
    this.BudgetItems = this.itemService.getItems()
  }

}
