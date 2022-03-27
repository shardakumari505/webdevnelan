import React, {Component} from 'react';
import './blogtop.scss';
import {Link} from 'react-router-dom';


class blogtop extends Component {
    render() {
        return (
            <div className='blog-top'>
                
                <div className='blog-top-navbar'>
                    <div className='blog-top-read-blogs-1'><img className='blog-top-read-blog-1-img' src='https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' /></div>
                    <div className='blog-top-read-blogs-2'><img className='blog-top-read-blog-2-img' src='https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' /></div>
                    <div className='blog-top-read-blogs-3'><img className='blog-top-read-blog-3-img' src='https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' /></div>
                </div>
            </div>
        )
    }
}

export default blogtop;