import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/Post';

@Component({
  selector: 'app-post-one',
  templateUrl: './post-one.component.html',
  styleUrls: ['./post-one.component.scss']
})
export class PostOneComponent implements OnInit {
  post:Post;

  constructor(
    private route:ActivatedRoute,
    private postService:PostService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.postService.postOne(params.id).subscribe(post =>{
        this.post = post;
      })
    })
  }

}
