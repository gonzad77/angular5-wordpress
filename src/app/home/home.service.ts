import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  url: string = 'http://wordpress.startapplabs.com/blog/wp-json/wp/v2/';

  constructor(
   private http: HttpClient
 ){
 }

 getPosts(){
   return new Promise((resolve, reject) => {
     this.http.get(this.url + 'posts').subscribe(data => {
       // Read the result field from the JSON response.
       resolve(data);
     });
   });
  }

  getCommentByPost(itemId){
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'comments?post=' + itemId).subscribe(data => {
        // Read the result field from the JSON response.
        resolve(data);
      });
    });
  }
}
