import React from 'react';
import './signup-page.scss';
import SignupForm from '../../components/signup-form-component/signup-form.component';

const SignupPage = () => {
    return (<div className='signup-page'>
        <div className='signup-page-left'></div>
        <div className='signup-page-right'><SignupForm /></div>
        </div>)
}

export default SignupPage;