import { Component } from '@angular/core';
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

  constructor(private router: Router, private subService: ListSubsService, private formBuilder: FormBuilder) {

    this.addForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      countryCode: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      jobTitle: new FormControl(''),
      area: new FormControl('')
    });

  }

  addSub(form: any) {
    const sub = {Subscribers: [{
      Name: form.name,
      Email: form.email,
      CountryCode: form.countryCode,
      PhoneNumber: form.phoneNumber,
      JobTitle: form.jobTitle,
      Area: form.area,
      topics: []
    }]}

    this.subService.addSub(sub).subscribe(data => {
      console.log(data);
      this.router.navigate(['subs']);
    });
  }

}
