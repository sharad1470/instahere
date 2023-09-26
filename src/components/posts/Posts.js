import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { storage,db } from '../../Firebase';
import Post from './post/post';
import './Posts.css';

const Posts = ({user}) => {

    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        db.collection("posts")
        .orderBy('timestamp', "desc")
        .onSnapshot((snapshot)=>{
            
            setPosts(snapshot.docs.map((doc)=>{
                return {id:doc.id,post:doc.data()}
            }))

            
        })
    },[])

        //console.log(posts);
    return (
        <div className='posts'>
            {
                posts.map(({post,id})=>{
                    return <Post key={id} user={user} postId={id} post={post}/>
                })
            }
        </div>
    );
};

export default Posts;