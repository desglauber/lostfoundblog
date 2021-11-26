import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  post: Post = {id:'', nome: '', documento:'', local: ''};

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  cadastrarDocumento(post: Post){
    this.postService.postMensagem(this.post).subscribe(()=>{
      alert('Documento cadastrado com sucesso!');
    },
    () => {
      alert('Ocorreu um erro!');
    });
    location.assign('/feed');
  }
}
