import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ title: '', body: '' })

    function addNewPost(e) {
        e.preventDefault();
        const newPost = { ...post, id: Date.now() }
        //callback function due to not to pass props to App.js
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            {/* controlled element */}
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Enter title'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type='text'
                placeholder='Enter body'
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;