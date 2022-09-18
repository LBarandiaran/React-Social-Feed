import React, { useState } from 'react';


const AddPostForm = (props) => {

    const [name, setName] = useState(0);
    const [post, setPost] = useState('');

    return (
        <form>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='submit'>Post</button>
        </form>
      );
}
 
export default AddPostForm;