import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup;
  articles;
  num;

  constructor(private articleService : ArticleService, private formBuilder: FormBuilder) { }

  

  ngOnInit() {
   this.affichage();
   this.form = this.formBuilder.group({
     titre: ['',Validators.required],
     image:['',Validators.required],
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

}
