import React, { Component } from 'react';
import './blog.styles.scss';

const BlogComponent = () =>{
    return(<div className='blog-component-home-page'>
        <div className='blog-component-left'>
            <h2>Read and Share Blogs</h2>
            <p>Publish your passions your way. Whether you'd like to share your knowledge, experiences or the latest news, create  unique and beautiful blogs and posts</p>
            <ul>
                <li>Make New Friends</li>
                <li>Share your daily blogs and posts</li>
                <li>Read and share other posts</li>
            </ul>
        </div>
        <div className='blog-component-right'>
        <div className="blog-component-lottie-animation"><lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_yg9ubdj2.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          ></lottie-player></div>
        </div>
    </div>)
};

export default BlogComponent;