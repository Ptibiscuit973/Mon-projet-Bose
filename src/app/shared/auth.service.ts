import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Enregistrement
  register(email:string,password:string){
    return new Promise(
      (resolve,reject)=>{ 
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()=>{// fonction annonime pour le resolve
            resolve();
            console.log('creation avec succès');
          }
        ).catch( // fonctionne comme le else et arrete la poursuite du script en cas d'erreur
          (error)=> {// fonction error pour le reject
            reject(error);
          }
        )
      });
    
  }

  // Connexion
  login(email:string,password:string){
    return new Promise(
      (resolve,reject)=>{ 
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          ()=>{// fonction annonime pour le resolve
            resolve();
            console.log('Connexion success');
          }
        ).catch( // fonctionne comme le else et arrete la poursuite du script en cas d'erreur
          (error)=> {// fonction error pour le reject
            reject(error);
          }
        )
      });
    
  }

  // deconnexion
  logout(){
    return new Promise((resolve,reject)=>{
      if(firebase.auth().currentUser){
        firebase.auth().signOut();
        resolve();
      }else{
        reject();
      }
    })
  }

}
