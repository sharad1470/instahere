import React, { useEffect, useState } from 'react';
import './post.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { storage,db } from '../../../Firebase';
const Post = ({user,postId,post}) => {

    const {imageURL, caption, username}=post;
    const [newComment, setNewComment]=useState('');
    const [comments, setComments]=useState([]);
    const [editCommentId, setEditcommentId]=useState(null);
    const [editCommentText, setEditcommentText]=useState('');
    const [editText, setEditText]=useState('');
    const [showEdit, setShowEdit]=useState(false);

    const deleteHandle=()=>{
        db.collection('posts')
        .doc(postId).delete()
    }

    const addCommentHandler=()=>{
        db.collection("posts")
        .doc(postId).collection("comments")
        .add({
            text:newComment,
            userName:user.displayName,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setNewComment('');
    }

    const deleteCommentHandle=(id)=>{
        db.collection('posts')
        .doc(postId)
        .collection('comments')
        .doc(id).delete();
    }

    const editCommentHandle=(id,txt)=>{
        setShowEdit(true);
        setEditcommentText(txt);
        setEditcommentId(id);
    }

    const updateCommentHandler=()=>{
        db.collection('posts')
        .doc(postId)
        .collection('comments')
        .doc(editCommentId).update({
            text:editCommentText
        }).then(()=>{
            setShowEdit(false);
        })
    }
    useEffect(()=>{
        db.collection('posts')
        .doc(postId).collection('comments')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            setComments(snapshot.docs.map((doc)=>{
                return {id:doc.id,comment:doc.data()}
            }))
        })
    },[postId])

    return (
        <div className='post'>
            <div className='post-header'>
                <div className='post-avatar'>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className='post-username'>{username}</div>
                
            </div>
            <div className='post-cover'>
                <img src={imageURL}/>
            </div>
            <div className='post-bottom'>
                <div className='post-text'>{caption}</div>
                <div className='post-comment'>
                    <div className='post-comment-comments'>
                        {
                            comments.map(({id,comment})=>{
                                return <div key={id} className='post-comment-singlecomment'> 
                                    <div className='post-comment-singlecomment-username'>{comment.userName}</div>
                                    <div className='post-comment-singlecomment-text'>{comment.text}</div>
                                    <div className='post-comment-edit'></div>
                                   {user.displayName===comment.userName && <div  className='post-comment-delete'>
                                        <i  onClick={()=>editCommentHandle(id,comment.text)} className="edit fa-solid fa-pen-to-square"></i>
                                        <i onClick={()=>deleteCommentHandle(id)} class="fa-solid fa-trash"></i>
                                    </div>
                                    }
                                </div>
                            })
                        }
                    </div>
                    {showEdit && <div className='post-comment-editbox'>
                        <input
                            value={editCommentText}
                            onChange={(e)=>setEditcommentText(e.target.value)}
                        />
                        <button onClick={updateCommentHandler}>update</button>
                    </div>
                    }
                    <div className='post-comment-input'>
                        <input 
                        value={newComment}
                        onChange={(e)=>setNewComment(e.target.value)}
                        placeholder='Add your comment'/>

                        <div onClick={addCommentHandler} className='post-comment-addbutton'>Add</div>
                    </div>
                  
                </div>

                

                
                {username===user.displayName && <div 
                onClick={deleteHandle}
                className='post-delete'>
                     <i class="fa-solid fa-trash"></i>
                </div>}
            </div>
           
           

        </div>
    )};

export default Post;