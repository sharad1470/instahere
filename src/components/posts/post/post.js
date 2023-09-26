import React from 'react';
import './post.css';
const Post = ({user,id,post}) => {

    const {imageURL, caption, username}=post;

    const deleteHandle=()=>{
        
    }

    return (
        <div className='post'>
            <div className='post-header'>{username}</div>
            <div className='post-cover'>
                <img src={imageURL}/>
            </div>
            <div className='post-bottom'>
            <div className='post-text'>{caption}</div>
            <div className='post-comment'></div>
            {username===user.displayName && <div 
            onClick={deleteHandle}
            className='post-delete'>delete me</div>}
            <div></div>
            </div>

        </div>
    )};

export default Post;