import React from 'react';
import './collab.styles.scss';

const Collab =() =>{
    return(<div className='collab-home-page'>
        <div className='collab-home-left'>
            <div className="collab-page-lottie-animation"><lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_pdxhebsy.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          ></lottie-player></div>
        </div>
        <div className='collab-home-right'>
            <h2 className='collab-text-title'>Real Time Collaborative Code Editor</h2>
            <p>Open a editor, write or copy code, then share it with friends and teams. Pair program and troubleshoot together. It provides adequate space to developers
while still respecting their preferences</p>
            <ul>
                <li>Share link with friends</li>
                <li>Live connect with other Collaborators via Text Messages , Audio Calls or Video Calls</li>
            </ul>
        </div>
    </div>);

}
export default Collab;