

import React, { useEffect, useState } from 'react';
import './App.css';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import Home from './Home';
import Header from './components/Header/Header';
import { auth } from './Firebase';

function App() {

  const [openRegisterUser, setOpenRegisterUser]=useState(false);
  const [openSignIn, setOpenSignIn]=useState(false);

  const [user,setUser]=useState(null);
  
  
 useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
        if(authUser){
         // console.log(authUser);
          setUser(authUser)
        }else{
          setUser(null);
        }
    })

    return ()=>{
      unsubscribe()
    }; 
 },[])
  return (
    <div className="App">
      <Header 
      user={user}
      setOpenSignIn={setOpenSignIn} setOpenRegisterUsers={setOpenRegisterUser}/>


      <Home 
      user={user}
      openSignIn={openSignIn} openRegisterUser={openRegisterUser} 
      setOpenSignIn={setOpenSignIn}
      setOpenRegisterUsers={setOpenRegisterUser}/>
    
     
    </div>
  );
}

export default App;
