import React from 'react';
import './user-home-page.scss';


const UserHomePage = () => {
    return(<div className='user-home-page-container'> 
        <div className='user-home-left'>
            <div className='user-home-left-wish'>
                <div className='user-home-left-wish-text'>Hello, User</div>
                <div className='user-home-left-wish-card'>
                    <div className='user-home-left-button-options'>Open Code Editor</div>
                    <div className='user-home-left-button-options'>Create a new room</div>
                    <div className='user-home-left-button-options'>Join a new Team</div>
                </div>
            </div>
            <div className='user-home-left-rooms'>
                <div className='user-home-left-rooms-text'>Your Rooms</div>
                <div className='user-home-left-room-card'></div>
            </div>
            <div className='user-home-left-repositories'>
                <div className='user-home-left-repository-text'>Your Repositories</div>
                <div className='user-home-left-repository-card'></div>
            </div>
        </div>
        <div className='user-home-right'>
            <div className='user-home-task-remaining'>
                <div className='user-home-task-remaining-title'>Tasks Remaining</div>
                <div className='user-home-task-remaining-card'></div>
            </div>
            <div className='user-home-music-player'>
                <div className='user-home-music-player-title'>Music Player</div>
                <div className='user-home-music-player-card'></div>
            </div>
        </div>
         
     </div> )
}

export default UserHomePage;