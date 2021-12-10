import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AtualizaComponent } from './atualiza/atualiza.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatoComponent } from './contato/contato.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  /* {path: 'cadastro', redirectTo: 'login', pathMatch: 'full'}, */
  {path: 'home', component: HomeComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'atualiza', component: AtualizaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
