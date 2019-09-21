import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/Post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string = 'http://localhost:5000/api/post';

  constructor(
    private http:HttpClient
  ) { }

  postAll():Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }
  
  postOne(id:string):Observable<Post>{
   return this.http.get<Post>(`${this.url}/${id}`);
  }

  postDelete(id:string):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  postUpdate(id:string,post:Post):Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`,post,httpOptions);
  }

  postAdd(newPost:Post):Observable<Post>{
    return this.http.post<Post>(this.url,newPost,httpOptions);
  }
}
