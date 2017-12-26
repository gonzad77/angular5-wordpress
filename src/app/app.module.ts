import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomeService } from './home/home.service';
import { HomeResolver } from './home/home.resolver';
import { PostService } from './post/post.service';
import { PostComponent } from './post/post.component';
import { PostResolver } from './post/post.resolver';
import { CategoryComponent } from './category/category.component';
import { CategoryResolver } from './category/category.resolver';
import { CategoryService } from './category/category.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [HomeService, PostService, CategoryService, HomeResolver, PostResolver, CategoryResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
