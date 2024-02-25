import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    return this.http.get<any>('/api/posts');
  }

  createPost(postData: any): Observable<any> {
    return this.http.post<any>('/api/posts', postData);
  }
}
