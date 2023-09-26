import React, {useState} from 'react';
import Modal from 'react-modal';
import './SignInModal.css';

const SignInModal = ({openSignIn, signIn}) => {
    
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
          <Modal isOpen={openSignIn} style={customStyles}>
              <div className='modal-inner'>
                
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
                <div onClick={()=>signIn(email,password)} className='modal-button'>SignIn</div>
              </div>
          </Modal>
      );
  
};

export default SignInModal;