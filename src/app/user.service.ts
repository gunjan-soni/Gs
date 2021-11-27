import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getData(){
    let url = "https://thecodeangle.com/wp-json/wp/v2/posts";
    return this.http.get(url);
  }
}
