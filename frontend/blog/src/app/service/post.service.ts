import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Post } from '../model/Post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/posts';

  getPosts(){
    return this.http.get<Post[]>(this.url);
  }

  postMensagem(post: Post): Observable<Post>{
    return this.http.post<Post>(this.url, post)
  }

  updatePost (id: string, value: any) : Observable<Object>{
    return this.http.put(`${this.url}/${id}`, value)
  }

  deletePost(id: string): Observable<any>{
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}
