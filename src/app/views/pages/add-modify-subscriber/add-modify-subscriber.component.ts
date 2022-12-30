import { Component } from '@angular/core';

@Component({
  selector: 'app-add-modify-subscriber',
  templateUrl: './add-modify-subscriber.component.html',
  styleUrls: ['./add-modify-subscriber.component.scss']
})
export class AddModifySubscriberComponent {

  isAdding: boolean = false;
  isModifying: boolean = false;

  constructor() {}

  handleOptionsClick(e: any) {
   
    let trigger = e.target.id;

    if(trigger == 'add') {
      this.isAdding = true;
      this.isModifying = false;
    } else if(trigger == 'modify') {
      this.isAdding = false;
      this.isModifying = true;
    }
    
  }

}
