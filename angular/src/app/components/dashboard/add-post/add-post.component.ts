import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { PostService } from '../../../services/post.service';
import { Post } from '../../../interfaces/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  title:string;
  author:string = 'unknown';
  body:string;

  constructor(
    private postService:PostService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    const { title,author,body } = this;
    const newPost:Post = {
      title,
      author,
      body
    }
    this.postService.postAdd(newPost)
      .subscribe(
        post=>{
        //go to home page
        this.router.navigate(['/']);
      },
      error =>{
        console.log(error.error)
      })
  }

}
