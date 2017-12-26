import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HomeService } from '../home/home.service';

@Injectable()
export class HomeResolver implements Resolve<any> {

  constructor(
    public homeService: HomeService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {

    let items = [];

    return new Promise((resolve, reject) => {
      this.homeService.getPosts()
      .then( res => {
        for(let item of  <Array<any>> res){
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
