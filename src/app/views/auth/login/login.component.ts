import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  formLogin: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private formBuilder: FormBuilder) {
    
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

  }

  login(form: any) {

    const user = { username: form.username, password: form.password };
    this.loginService.login(user).subscribe(data => {
      // console.log(data);
      this.loginService.setToken(data.Token);
      this.router.navigate(['subs']);
      return;
    });

    // error handling

  }
  
}
