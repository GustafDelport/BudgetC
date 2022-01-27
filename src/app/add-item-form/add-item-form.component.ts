import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item-model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  //getting input from the form
  @Input() Item: BudgetItem
  //event emitter
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem: boolean

  constructor() { }

  ngOnInit(): void {
    if (this.Item) {
      this.isNewItem = false;
    }
    else {
      this.Item = new BudgetItem("",0);
      this.isNewItem = true;
    }
  }

  //send forms value to any listener
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value)
    form.reset();
  }

}
