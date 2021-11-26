import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = 'http://172.27.13.4:3000/posts';

  getPosts(){
    return this.http.get<Post[]>(this.url);
  }

  postMensagem(post: Post): Observable<Post>{
    return this.http.post<Post>(this.url, post)
  }
}
