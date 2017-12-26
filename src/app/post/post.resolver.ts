import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { PostService } from '../post/post.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class PostResolver implements Resolve<any> {

  constructor(
    public postService: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      var postId = route.paramMap.get('id');
      Observable.forkJoin(
        this.getPostAndAuthor(postId),
        this.getComments(postId))
        .subscribe(data => {
          let post = data[0];
          let comments = data[1];
          resolve({post: post, comments: comments})
        });
    })
  }

  getPostAndAuthor(postId){
      return this.postService.getPost(postId)
  }

  getComments(postId){
    return this.postService.getComments(postId)
  }
}
