import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[]=[];
  post: Post = {id:'', nome: '', documento:'', local: ''};

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
      alert('Documento cadastrado com sucesso');
    },
    () => {
      alert('Error');
    });
    location.assign('/feed');
  }

  /*  cadastrarDocumento(){
    this.postService.postMensagem(this.post).subscribe((data: Post)=>{
      this.post = data
      location.assign('/feed')
    })
  } */

}
