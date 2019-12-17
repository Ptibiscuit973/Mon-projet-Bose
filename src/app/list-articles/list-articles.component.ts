import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../shared/article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../article';
import { from } from 'rxjs';



@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  form: FormGroup;
  articles;
  num;

  constructor(private articleService : ArticleService, private formBuilder: FormBuilder) { }

  

  ngOnInit() {
   this.affichage();
   this.form = this.formBuilder.group({
     titre: ['',Validators.required],
     image: ['', Validators.required],
     article: ['',Validators.required],
     auteur: ['',Validators.required],
     parution: ['',Validators.required]
   });
  }

  affichage(){
    this.articleService.getArticles().subscribe(a =>{
      this.articles = a.map(item =>{
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
      });
    });
  }

  addArticle(){
    if(this.form.valid){
      let article ={
        titre: this.form.value.titre,
        image: this.form.value.image,
        article: this.form.value.article,
        auteur: this.form.value.auteur,
        parution: this.form.value.parution
      }
      this.articleService.createArticle(article);
      console.log(article);
    };
  }

  onUpdate(id){
    this.num = id;
    this.articleService.updateArticle(this.form.value, id);
    
    
    
  }

  /*onDelete(id){
    this.articleService.deleteArticle(id);
    this.num = id;
  }*/

  remove(id){
    if(confirm('Etes-vous sùr de vouloir Supprimer ?')){
      this.articleService.deleteArticle(id);
      this.num = id;
    }
  }

}
