import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-left'>
                    <img 
                    alt='image'
                    src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"/>

                </div>
                <div className='header-right'>
                    <div className='header-right-button'>SignIn</div>
                    <div className='header-right-button'>SignUp</div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;