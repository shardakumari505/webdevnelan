import React from 'react';
import './Share.scss';
import { NavLink } from 'react-router-dom';
import Blogtop from './blogtop.js';
import More from './more.png';



const Share = () => {
    return (<div className='ShareBlogpage'>
        <div className='blog-page-left'>
            <div className='blog-page-top'>Write your Blog Here</div>
            <div className='blog-text-input'>
                <textarea className='blog-share'  type='text'  name='blogtext' id='blogtext' placeholder='share your experience.............' required></textarea>
                <div className='blog-share-bottom'>
                    <div className='blog-bottom-submit'><button className='blog-submit-button'>Submit</button></div>
                </div>
            </div>
        </div>
        <div className='blog-page-right'>
            <div className='blog-page-right-top'>
            <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_y5kf5v3b.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
            </div>
            <div className='blog-page-right-centre'>Read and Write Blogs</div>
            <div className='blog-page-right-bottom'>
                <div className='blog-page-right-bottom-button'>Read more Blogs</div>
            </div>
        </div>
    </div>)
}

export default Share;