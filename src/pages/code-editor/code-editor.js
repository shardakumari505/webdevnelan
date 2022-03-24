import React from 'react';
import './code-editor.scss';


const CodeEditor = () => {
    return (
    <div className='code-editor-page'>
        <div className='code-editor-first-part'>
            <div className='code-editor-first-part-left'>
                <div className='code-editor-first-part-left-options'>File</div>
                <div className='code-editor-first-part-left-options'>Run</div>
                <div className='code-editor-first-part-left-options'>Add Members</div>
                <div className='code-editor-first-part-left-options'>Remove Members</div>
            </div>
            <div className='code-editor-first-part-right'>close editor</div>
        </div>
        <div className='code-editor-second-part'>
            <div className='code-editor-left'>
                <div className='code-editor-left-content'></div>
            </div>
            <div className='code-editor-right'>
                <div className='code-editor-user-1'>
                    <div className='code-editor-user1-img'></div>
                </div>
                <div className='code-editor-user-2'>
                    <div className='code-editor-user2-img'></div>
                </div>
                <div className='code-editor-team-message'>
                    <div className='code-editor-message-title'>Team Messages</div>
                    <div className='code-editor-message-card'></div>
                </div>
                <div className='code-editor-right-options'>
                    <div className='code-editor-video-call'>Video Call</div>
                    <div className='code-editor-audio-call'>Audio Call</div>
                </div>
            </div>
        </div>
    </div>)
}

export default CodeEditor;