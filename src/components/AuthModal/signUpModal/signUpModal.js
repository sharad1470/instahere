import React from 'react';
import Modal from 'react-modal';
import './SignUpModal.css';
import { Link } from 'react-router-dom';

const SignUpModal = ({isModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#4BB543',
          borderRadius:'12px'
        },
      };
    return (
        <Modal isOpen={isModalOpen} style={customStyles}>
            <div className='modal-inner'>
                <label>Expense added successfully</label>
                {/* <img src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png"  */}
                {/* alt="" className='added-image'/> */}
            <Link to='/'>
            <div className='take-home-button'>
                <i class="fa-solid fa-house"></i>
                Home
            </div>
            </Link>
            </div>
        </Modal>
    );
};

export default SignUpModal;