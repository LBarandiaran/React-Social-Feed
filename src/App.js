import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import AddPostForm from './Components/AddPost/AddPostForm';

function App() {
  
  return (
    <div>
      <DisplayPosts />
      <AddPostForm />

    </div>
  );
}


export default App;
