import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  BudgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.BudgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    
  }

  deleteItem(item: BudgetItem) {
    let idex = this.BudgetItems.indexOf(item);
    this.BudgetItems.splice(idex,1);
    this.totalBudget -= item.amount;
  }

}
