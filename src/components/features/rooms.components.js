import React from 'react';
import './rooms.styles.scss';

const RoomsComponents = () =>{
    return(<div className='rooms-components-home-page'>
        <div className='rooms-component-left'>
            <div className="rooms-component-lottie-animation"><lottie-player
            src="https://assets3.lottiefiles.com/private_files/lf30_jrhj68re.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          ></lottie-player></div>
        </div>
        <div className='rooms-component-right'>
            <h2 className='rooms-component-right-text'>Connect to Teams via Virtual Chamber</h2>
            <p>Your virtual chamber is where you can invite your developer friends, share codes, files and connect via text messages, video calls and audio calls. The owner of the chamber will have full control over moderation and content control.</p>
            <ul>
                <li>Text Messages</li>
                <li>Video Calls</li>
                <li>Audio Calls</li>
                <li>Listen to Music</li>
                <li>Share Codes and Files</li>
            </ul>
        </div>
    </div>)
};

export default RoomsComponents;