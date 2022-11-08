import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import PostService from '../API/postService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, comError] = useFetching( async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, error] = useFetching( async () => {
        const response = await PostService.getCommentsById(params.id)
        setComments(response.data)
    })
    
    useEffect( () => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div>
            page of post {params.id}
            {isLoading
                ? <Loader/>
                : <div>
                    {post.id}. {post.title}
                    <div>{post.body}</div>
                </div>
                
            }
            <h1>
                Comments
            </h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop:15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>    
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;