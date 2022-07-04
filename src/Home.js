import React, { useEffect, useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home(){

    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    const {data:blogs,isPending,error}=useFetch('https://my-json-server.typicode.com/mr-hollowman/myserver/posts')

    return (
        <div className='home'>
            {error && <div>{error}, Please read my readme.md and start Your json-server and try again</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
            {/* <BlogList blogs={blogs.filter(item =>item.author === 'kavi')} title='Kavi blogs!' handleDelete={handleDelete} /> */}
            {/* <BlogList blogs={blogs.filter(item =>item.author === 'selva')} title='selva blogs!' handleDelete={handleDelete} /> */}
        </div>
    );
}

export default Home;