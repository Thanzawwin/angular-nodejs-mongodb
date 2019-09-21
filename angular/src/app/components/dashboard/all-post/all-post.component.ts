import { Component, OnInit } from '@angular/core';
import { Post } from '../../../interfaces/Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent implements OnInit {

  posts:Post[];

  constructor(
    private postService:PostService
  ) { }

  ngOnInit() {
    this.postService.postAll().subscribe(posts => this.posts = posts);
  }

  postDel(id){
    this.postService.postDelete(id).subscribe(post => {
      //recall post all
      this.postService.postAll().subscribe(posts => this.posts = posts);
    })
  }

}
