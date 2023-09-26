import React, { useState } from 'react';
import './AddPost.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { storage,db } from '../../Firebase';


const AddPost = ({user}) => {

    const [caption,setCaption]=useState('');
    const [progress,setProgress]=useState(0);
    const [image,setImage]=useState(null);

    const handleChange=(e)=>{
      //  console.log("2");
        if(e.target.files[0]){
            setImage(e.target.files[0]);
            //console.log(e.target.files[0].name)
        }
    }
    const handleUpload=()=>{

        if(!image){
            alert('please provide image');
            return;
        }
        const uploadTask=storage.ref(`images/${image.name}`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                const progress=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                    )
                setProgress(progress);
            },
            (error)=>{
                console.log(error.message);
                alert(error.message)
            },
            ()=>{
                
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{
                         db.collection("posts").add({
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            caption,
                            imageURL:url,
                            username:user.displayName

                         }).then(()=>{
                            setCaption('');
                            setImage(null);
                         setProgress(0);
                         })
                         
                    })
                    .catch(error=>{
                        alert(error.message)
                    })
            }

        )
    }

    return (
        <div className='addpost'>
            <div className='addpost-file addpost-input'>
                <input type='file' onChange={handleChange}/>
            </div>
            <div className='addpost-textfield addpost-input'>
                <textarea label='Caption Here'
                variant='filled'
                value={caption}
                onChange={(e)=>setCaption(e.target.value)}
                
                />
            </div>
                <div className='addpost-progressbar'>
                    <progress className='progress addpost-input' value={progress} max='100'/>
                </div>

                <div className='addpost-button' onClick={handleUpload}>
                    Add Post
                </div>

        
        </div>
    );
};

export default AddPost;