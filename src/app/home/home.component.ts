import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<any> = new Array<any>();

  constructor(
    private homeService : HomeService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
     let data = routeData['data'];
     if (data) {
       this.items = data;
     }
   })
  }

  readMore(postId){
    this.router.navigate(['/post/' + postId]);
  }

}
