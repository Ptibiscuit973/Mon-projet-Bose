import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';





const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'presentation', component:PresentationComponent},
  {path:'contact', component:ContactComponent},
  {path: 'admin', canActivate:[AuthGuardService], component:ListArticlesComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
