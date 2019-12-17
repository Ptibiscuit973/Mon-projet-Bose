import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { from } from 'rxjs';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private firestore: AngularFirestore) { }

  getArticles(){
    //return this.firestore.collection('articles').valueChanges();
    return this.firestore.collection('articles').snapshotChanges();
  };

  createArticle(art:Article){
    return this.firestore.collection('articles').add(art);
  }

  deleteArticle(id){
    return this.firestore.collection('articles').doc(id).delete();
  }

  //mise a jour de données
  updateArticle(art:Article,id){
    return this.firestore.collection('articles').doc(id).update(art);
  }


}
