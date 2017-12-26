import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: any;
  comments: any;
  categories: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       this.post = data.post;
       this.comments = data.comments
       this.postService.getCategories(this.post.categories)
       .then(categories => {
         this.post.categoriesInfo = categories;
       });
       this.postService.getAuthor(this.post.author)
       .then(result => {
         this.post.authorName = result.name;
        })
     }
   })
  }

  goToCategories(categoryId){
    this.router.navigate(['/category/' + categoryId]);
  }
}
