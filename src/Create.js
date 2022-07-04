import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('selva');
    const [isPending,setIspending]=useState(false);
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        setIspending(true);
        // const blog ={title,body,author};
        axios.post("https://my-json-server.typicode.com/mr-hollowman/myserver/posts",{title,body,author})
            .then(()=>{
                console.log('new blog added');
                setIspending(false);
                navigate('/');
            })
    }
    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title :</label>
                <input type='text'
                        required 
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} />
                <label>Blog body:</label>
                <textarea required
                            value={body}
                            onChange={(e)=>setBody(e.target.value)}
                            ></textarea>
                <label>Blog author :</label>
                <select value={author} 
                                onChange={(e)=>setAuthor(e.target.value)}
                                >
                    <option value='selva'>selva</option>
                    <option value='kavi'>kavi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;