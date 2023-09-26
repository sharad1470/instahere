import React from 'react';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import './Header.css';
import { auth } from '../../Firebase';

const Header = ({setOpenRegisterUsers, setOpenSignIn,user}) => {

    //console.log(user);
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-left'>
                    <img 
                    alt='image'
                    src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"/>

                </div>
                <div className='header-right'>

                    {user==null?(
                        <>
                        <div onClick={()=>setOpenSignIn(true)} className='header-right-button'>SignIn</div>
                        <div onClick={()=>setOpenRegisterUsers(true)} className='header-right-button'>SignUp</div>
                        </>
                    ):(
                        <>
                        <div>Hello  {user.displayName}</div>
                        <div onClick={()=>auth.signOut()} className='header-right-button'>LogOut</div>
                        </>
                    )
                    }
                    
                </div>
            </div>
            
        </div>
    );
};

export default Header;