import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Post } from '../model/Post';
//import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:3000/posts/';

  postDocument(data: any){
    return this.http.post<any>(this.url, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getDocument(){
    return this.http.get<any>(this.url)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  updateDocument(data: any, id: number){
    return this.http.put<any>(this.url + id, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  delDocument(id: number){
    return this.http.delete<any>(this.url + id)
    .pipe(map((res: any) => {
      return res;
    }))
  }
}
