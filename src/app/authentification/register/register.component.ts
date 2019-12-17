import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formBuilder:FormBuilder
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

  onRegister(){
    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    this.authService.register(email,password).then(
      ()=>{
        console.log('succès');
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    )
  }

}
