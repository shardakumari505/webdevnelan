import React from 'react';
import './code-editor.scss';
import Navbar from '../../components/navbar-component/navbar.component';
import { NavLink } from 'react-router-dom';
import UserRooms from '../user-rooms/user-rooms';
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import Editor1 from '../../components/Editor/editor';

// Themes
import "codemirror/theme/material.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/nord.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/eclipse.css";
 


const CodeEditor = () => {
    return (<div className='code-editor-page-container'>
        <Navbar />
    <div className='code-editor-page'>
            <div className='code-editor-container'>
            <div className='code-editor-first-part'>
            <div className='code-editor-first-part-left'>
               Code Editor
            </div>
            
        </div>
        <div className='code-editor-second-part'>
            <div className='code-editor-left'>
                <Editor1/>
                {/* <div className='code-editor-left-content'></div> */}
            </div>
            <div className='code-editor-right'>
                <div className='code-editor-user-1'>
                    <div className='code-editor-user1-img'> <img src='https://shrimpspotmedia.s3.amazonaws.com/monthly_11_2014/post-352-0-31292200-1415988510.gif' alt='user1'/></div>
                </div>
                <div className='code-editor-user-2'>
                    <div className='code-editor-user2-img'><img src='https://media2.giphy.com/media/KAvlM8rLYEXkLTMMM5/200.gif' alt='user2'/></div>
                </div>
                <div className='code-editor-team-message'>
                    <div className='code-editor-message-title'>Team Messages</div>
                    <div className='code-editor-message-card'><img src='https://i.gifer.com/7plQ.gif' alt='message loading'/></div>
                </div>
                <div className='code-editor-right-options'>
                    <div className='code-editor-video-call' onClick={()=> alert("3 din mein isse jyada naa ho payega 🥲")} >Video Call</div>
                    <div className='code-editor-audio-call' onClick={()=> alert("3 din mein bacche ki jaan loge kya? 🥺")}>Audio Call</div>
                </div>
            </div>
    </div> 
    </div>
    </div>
    </div>)
}

export default CodeEditor;