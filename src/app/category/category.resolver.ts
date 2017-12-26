import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { CategoryService } from '../category/category.service';

@Injectable()
export class CategoryResolver implements Resolve<any> {

  constructor(
    public categoryService: CategoryService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {

    let items = [];

    return new Promise((resolve, reject) => {
      var categoryId = route.paramMap.get('id');
      this.categoryService.getPostsByCategory(categoryId)
      .then( res => {
        for(let item of <Array<any>> res){
          item.excerpt.rendered = item.excerpt.rendered.split('<a')[0] + "</p>";
          items.push(item);
        }
        return resolve(items)
      }, err => {
        return reject(err);
      })
    })
  }
}
