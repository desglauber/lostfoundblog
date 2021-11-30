import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  listPost: Post[]=[];
  post: Post = {id:'', nome:'', documento:'', local:''};

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts(){
    this.postService.getPosts().subscribe(data =>
      this.listPost = data);
  }

  cadastrarDocumento(post: Post){
    this.postService.postMensagem(this.post).subscribe(()=>{
      alert('Documento Nº: ' + post + ' cadastrado com sucesso!');
    },
    () => {
      alert('Ocorreu um erro!');
    });
    location.assign('/cadastro');
  }

  deletePost(id: string) {
    return this.postService.deletePost(id).subscribe(
      data=> {
        alert('Registro Nº: '+ id + ' excluído com sucesso!')
        location.assign('/cadastro');
      },
      error => console.log(error)
    );
  }
}
