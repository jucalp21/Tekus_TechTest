import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListSubsService } from 'src/app/services/listSubs/list-subs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  addForm: FormGroup;

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() countryCode: string = '';
  @Input() phoneNum: string = '';
  @Input() jobTitle: string = '';
  @Input() area: string = '';
  @Input() action: string = '';


  constructor(private router: Router, private subService: ListSubsService, private formBuilder: FormBuilder) {

    console.log(name)

    this.addForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      countryCode: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      jobTitle: new FormControl(''),
      area: new FormControl('')
    });


  }

  handleSub(form: any) {
    

    if(this.action == 'adding') {
      const sub = {Subscribers: [{
        Name: form.name,
        Email: form.email,
        CountryCode: form.countryCode,
        PhoneNumber: form.phoneNumber,
        JobTitle: form.jobTitle,
        Area: form.area,
        Topics: []
      }]}
      this.subService.addSub(sub).subscribe(data => {
        console.log(data);
        this.router.navigate(['subs']);
      });
    } else if(this.action == 'modifying') {
      const sub = {
        Id: this.id,
        Name: form.name,
        Email: form.email,
        CountryCode: form.countryCode,
        PhoneNumber: form.phoneNumber,
        JobTitle: form.jobTitle,
        Area: form.area,
        Topics: []
      }
      console.log(sub)
      this.subService.updateSub(this.id, sub).subscribe(data => {
        console.log(data);
        // this.router.navigate(['subs']);
      });
    }

  }

}
