import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  url: string = 'http://wordpress.startapplabs.com/blog/wp-json/wp/v2/';

  constructor(
   private http: HttpClient
 ){
 }

 getPostsByCategory(categoryId){
   return new Promise((resolve, reject) => {
     this.http.get(this.url + "posts?categories=" + categoryId).subscribe(data => {
       // Read the result field from the JSON response.
       resolve(data);
     });
   });
  }

}
