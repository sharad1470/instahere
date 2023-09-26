import React, { useState } from 'react';
import Modal from 'react-modal';
import './RegisterUserModal.css';

import { Link } from 'react-router-dom';

const RegisterUserModal = ({openRegisterUser, signUp,setOpenRegisterUsers}) => {

  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]= useState('');
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#4169E1',
          borderRadius:'12px'
        },
      };

    //  console.log(openRegisterUser);
    return (
        <Modal isOpen={openRegisterUser} style={customStyles}
        onClose={()=>{setOpenRegisterUsers(false)}}
        >
            <div className='modal-inner'>
              <div className='modal-inner-input'>
                <input 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder='Enter Your Name'></input>
              </div>
              <div className='modal-email modal-inner-input'>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Enter Your Email'></input>
              </div>
              <div 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className='modal-password modal-inner-input'>
                <input type='password' placeholder='Enter Your Password'></input>
              </div>
              <div onClick={()=>signUp(name,email,password)} className='modal-button'>SignUp</div>
            </div>
        </Modal>
    );
};

export default RegisterUserModal;