import React, { useState } from 'react';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import RegisterUserModal from './components/AuthModal/registerUserModal/RegisterUserModal';
import SignInModal from './components/AuthModal/signInModal/SignInModal';
import { auth } from './Firebase';
import AddPost from './components/AddPosts/AddPost';
import Posts from './components/posts/Posts';
const Home = ({openRegisterUser, setOpenRegisterUsers, openSignIn, setOpenSignIn, user}) => {


    const signIn=(email,password)=>{
        auth.signInWithEmailAndPassword(email,password)
        .catch((e)=>alert(e.message))

        setOpenSignIn(false);
        
    }
    const signUp=(name,email,password)=>{

        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
             authUser.user.updateProfile({
                displayName:name
            }).then(()=>setOpenRegisterUsers(false))
            
        })
        .catch((e)=>alert(e.message))

        
    }

    //const [openSignUp, setOpenSignUp]=useState(true);
   // console.log(openRegisterUser);
    return (
        <div className='home'>
            <RegisterUserModal openRegisterUser={openRegisterUser}
            setOpenRegisterUsers={setOpenRegisterUsers}
            signUp={signUp}
            />
            <SignInModal 
            signIn={signIn}
            openSignIn={openSignIn}/>

            {user && <AddPost user={user}/>}
            {user && <Posts user={user}/>}
            
        </div>
    );
};

export default Home;
