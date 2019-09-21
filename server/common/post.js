//model
const Posts = require('../model/Posts');

const addPost = (reqPost,done) => {
  const { title,author,body } = reqPost;
  //if not found all fields 
  if(!title || !author || !body){
    return done({msg:'Please fill all in required fields'},null);
  }

  //post title
  Posts
    .findOne({title})
    .then(post => {
      if(post){
        done({msg:'Please change post title && post title already used'});
      }else{
        //not found user
        done(null,{title,author,body});
      }
    })

}


module.exports = {
  addPost
}