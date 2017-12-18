import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      var postId = params.id;
      this.postService.getPost(postId)
      .then( res => {
        this.post = res;
        this.postService.getAuthor(res.author)
        .then(result => {
          this.post.authorName = result.name;
        })
        this.postService.getCategories(res.categories)
        .then(data => {
          this.post.categoriesInfo = data;
        })
      })
      this.postService.getComments(postId)
      .then( res => {
        this.comments = res;
      })

    })
  }

}
