import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';
import './App.css';

function App() {

  const [posts, setPosts] = useState([{name: 'John Doe', post: 'This is my first post'}])

  function addNewPost(post){

    let tempPosts = [...posts, post];

    setPosts(tempPosts);
  }
  
  return (
    <div className='container-fluid'>
      <div className='border-box'>        
        <AddPostForm addNewPost={addNewPost} />
      </div>
      <div className='border-box'>
        <DisplayPosts parentPosts={posts} />
      </div>
    </div>
  );
}

export default App;