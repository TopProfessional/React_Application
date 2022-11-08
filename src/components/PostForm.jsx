import MyButton from "./UI/button/MyButton.jsx";
import MyInput from "./UI/input/MyInput.jsx";
import React,{useState} from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }

    return (
        <div>
            <form>
                <MyInput
                    value = {post.title}
                    onChange = {e => setPost({...post, title: e.target.value})}
                    type='text'
                    placeholder="Post name"
                />
                <MyInput 
                    value = {post.body}
                    onChange = {e => setPost({...post, body: e.target.value})}
                    type='text' 
                    placeholder="Post description"
                />
                <MyButton onClick = {addNewPost}>create</MyButton>
            </form>
        </div>
    );
};

export default PostForm;