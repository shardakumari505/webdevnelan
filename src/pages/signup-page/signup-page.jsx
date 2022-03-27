import React from 'react';
import './signup-page.scss';
import Navbar from '../../components/navbar-component/navbar.component';
import SignupForm from '../../components/signup-form-component/signup-form.component';

const SignupPage = () => {
    return (<div className='signup-page-container'>
        <Navbar />
    <div className='signup-page'>
        <div className='signup-page-left'></div>
        <div className='signup-page-right'><SignupForm /></div>
        </div>
        </div>)
}

export default SignupPage;