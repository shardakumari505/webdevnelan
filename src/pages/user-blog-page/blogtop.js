import React, {Component} from 'react';
import './blogtop.scss';
import {Link} from 'react-router-dom';


class blogtop extends Component {
    render() {
        return (
            <div className='blog-top'>
                
                <div className='blog-top-navbar'>
                    <div className='blog-top-navbar-share'><Link to='/Share'>Share</Link></div>
                    <div className='blog-top-navbar-share'><Link to='/Read'>Read</Link></div>
                    <div className='blog-top-navbar-share'><Link to='/Saved'>Saved</Link></div>
                </div>
            </div>
        )
    }
}

export default blogtop;