import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string = 'http://wordpress.startapplabs.com/blog/wp-json/wp/v2/';
  items: Array<any> = new Array<any>();

  constructor(
    private http: HttpClient,
    private homeService : HomeService,
    private router: Router,
  ) { }

  ngOnInit() {
    var arr = [];
    this.homeService.getPosts()
   .then(data => {
     console.log(data)
     for(let i= 0 ; i<data.length ; i++ ){
       var item = data[i];
       item.excerpt.rendered = item.excerpt.rendered.split('<a')[0] + "</p>";
       this.items.push(item);
     }
   });
  }

  readMore(postId){
    this.router.navigate(['/post/' + postId]);
  }

}
