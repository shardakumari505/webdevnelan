import React from 'react';
import './signin-page.scss';
import Navbar from '../../components/navbar-component/navbar.component';
import SigninForm from '../../components/signin-form-component/signin-form.components';

const SigninPage = () => {
    return (<div className='signin-page-container'>
        <Navbar />
    <div className='signin-page'>
        <div className='signin-page-left'>
            <div className='signin-left-text1'>Login To</div>
            <div className='signin-left-text1'>Enter Your</div>
            <div className='signin-left-text1'>Virtual Room</div>
        </div>
        <div className='signin-page-right'><SigninForm/></div>
    </div>
    </div>)
}

export default SigninPage;