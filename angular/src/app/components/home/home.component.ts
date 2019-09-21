import { Component, OnInit } from '@angular/core';

import { PostService } from '../../services/post.service';

import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts:Post[];

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.postAll().subscribe(posts =>{
      this.posts = posts;
    })
  }

}
