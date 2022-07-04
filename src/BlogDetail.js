import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from './useFetch';

function BlogDetail() {
    const {id}=useParams();
    const {data:blog,error,isPending}=useFetch('https://my-json-server.typicode.com/mr-hollowman/myserver/posts/'+id);
    const navigate=useNavigate()
    const handleClick = ()=>{
        axios.delete("https://my-json-server.typicode.com/mr-hollowman/myserver/posts/" + blog.id)
            .then(()=>{
                navigate('/')
            })
    }
    return (
        <div className='blog-details'>
            <h2>Blog Details - {id}</h2>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            { blog && 
            <article>
                <h2>Written By {blog.author}</h2>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>}
        </div>
    );
}

export default BlogDetail;