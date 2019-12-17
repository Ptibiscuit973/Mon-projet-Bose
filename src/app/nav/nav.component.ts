import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

declare let $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  test = false;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    // dropdown
    $(".dropdown-trigger").dropdown();

    firebase.auth().onAuthStateChanged(
      (userSession)=>{
        console.log(userSession);
        if(userSession){
          console.log('vous etes connecté');
          this.test = true;
        }else{
          console.log('vous etes déconnecté');
          this.test = false;
        }
      }
    )
  }


  onLogout(){
    this.authService.logout().then(
      ()=>{
        this.router.navigate(['/login']);
      }
    )
  }
}
