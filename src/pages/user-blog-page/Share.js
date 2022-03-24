import React from 'react';
import './Share.scss';
import { NavLink } from 'react-router-dom';
import Blogtop from './blogtop.js';
import More from './more.png';



const Share = () => {
    return (<div className='ShareBlogpage'>
        <div className=''><Blogtop  /></div>
        <div className='blog-text-input'>
            <textarea className='blog-share'  type='text'  name='blogtext' id='blogtext' placeholder='share your experience.............' required></textarea>
            <div className='blog-share-bottom'>
                <div className='blog-share-more-options'>
                    <div className='blog-share-more-before'><img className='blog-share-more-img' src={More} /></div>
                    <div className='blog-share-more-after'>
                        <div className='blog-share-more-after1'></div>
                        <div className='blog-share-more-after2'></div>
                    </div>
                </div>
                <div className='blog-bottom-submit'><button className='blog-submit-button'>Submit</button></div>
            </div>
        </div>
    </div>)
}

export default Share;