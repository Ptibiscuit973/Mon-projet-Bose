import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(
    private authService: AuthService,
    private formBuilder:FormBuilder,
    private router: Router
    ) { }

    registerForm:FormGroup; // déclaration de formulaire



  ngOnInit() {
    this.initRegisterForm();
  }

  initRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email:['',[ Validators.required, Validators.email]], // a partir de deux regles de validators, cela devient un tableau
      password:['',[ Validators.required, Validators.minLength(6)]]
    });
  }

  onConnect(){
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    this.authService.login(email,password).then(
      (data)=>{
        console.log(data);
        this.router.navigate(['/admin']);
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  }


}
