import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';



const AddPostForm = (props) => {

    const [name, setName] = useState(0);
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        console.log(newPost);
        props.addNewPostProperty(newPost)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <div></div>
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            <Button variant="primary">Create</Button>
        </form>
      );
}
 
export default AddPostForm;