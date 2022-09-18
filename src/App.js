import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {

  const [posts, setPosts] = useState([{name: 'John Doe', post: 'This is my first post'}])

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }
  
  return (
    <div>
      <DisplayPosts parentPosts={posts} />
      <AddPostForm addNewPostProperty={addNewPost} />

    </div>
  );
}

export default App;