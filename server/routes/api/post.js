//you can use
// const express = require('express')
// const router = express.Router();
//router
const router = require('express').Router();

//model
const Posts = require('../../model/Posts');

//common
const addPost = require('../../common/post').addPost;

//@GET All
router.get('/',(req,res)=>{
  Posts
    .find({})
    .sort({date:-1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).send(err))
})  

//@GET one
router.get('/:id',(req,res)=>{
  Posts
  .findById(req.params.id)
  .then(post => res.json(post))
  .catch(err => res.status(404).send(err));
})

//@POST Add
router.post('/',(req,res)=>{
  addPost(req.body,(err,post)=>{
    if(err){
      res.status(400).send(err);
    }else{
      //new post
      let newPost = new Posts({
        title:post.title,
        author:post.author,
        body:post.body
      })

      //save post
      newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.status(404).send(err));
    }
  })
})

//@PUT Update
router.put('/:id',(req,res)=>{
  let id = {_id:req.params.id};
  let body = req.body;
  //update
  Posts
    .updateOne(id,body)
    .then(post => res.json(post))
    .catch(err => res.status(404).send(err));
})

//@DELETE Delete
router.delete('/:id',(req,res)=>{
  let id = {_id:req.params.id};
  //del
  Posts
    .deleteOne(id)
    .then(post => res.json(post))
    .catch(err => res.status(404).send(err));
})

module.exports = router;