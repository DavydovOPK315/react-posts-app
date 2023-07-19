import React, { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    });

    const [comments, setComments] = useState([])

    const [fetchCommentsByPostId, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id)
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsByPostId(params.id)
    }, [])

    return (
        <div>
            <h1>You open a post page with ID = {params.id}</h1>
            {isLoading
                ? <Loader />
                : <h1>Post: {post.title}</h1>
            }

            <h1>Comments</h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(com =>
                        <div key={com.id} style={{marginTop: '5px'}}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage
