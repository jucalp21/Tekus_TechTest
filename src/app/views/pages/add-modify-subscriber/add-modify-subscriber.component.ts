import { Component } from '@angular/core';
import { ListSubsService } from 'src/app/services/listSubs/list-subs.service';

@Component({
  selector: 'app-add-modify-subscriber',
  templateUrl: './add-modify-subscriber.component.html',
  styleUrls: ['./add-modify-subscriber.component.scss']
})
export class AddModifySubscriberComponent {

  isAdding: boolean = false;
  isModifying: boolean = false;

  
  isData: boolean = false;
  formModifyName: any;
  formModifyEmail: any;
  formModifyCountryCode: any;
  formModifyPhoneNumber: any;
  formModifyJobTitle: any;
  formModifyArea: any;
  action: string = 'adding';
  subId: number = 0;

  constructor(private subService: ListSubsService) {}

  handleOptionsClick(e: any) {
   
    let trigger = e.target.id;

    if(trigger == 'add') {
      this.isAdding = true;
      this.isModifying = false;
      this.action = 'adding';
    } else if(trigger == 'modify') {
      this.isAdding = false;
      this.isModifying = true;
      this.action = 'modifying';
    }
    
  }

  async searchSub() {
    await this.subService.getSubById(this.subId).subscribe(data => {
      if(data) {
        this.subId = data.Id;
        this.formModifyName = data.Name;
        this.formModifyEmail = data.Email;
        this.formModifyCountryCode = data.CountryCode;
        this.formModifyPhoneNumber = data.PhoneNumber;
        this.formModifyJobTitle = data.JobTitle;
        this.formModifyArea = data.Area;


        this.isData = true; 
      } else {
        this.isData = false; 
      }
    })
  }

}
