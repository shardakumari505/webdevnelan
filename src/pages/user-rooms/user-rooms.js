import React from 'react';
import './user-rooms.scss';
import ToDo from '../../components/to-do-list/to-do';


const UserRooms = () => {
    return (
    <div className='user-room-page'>
        <div className='user-room-left'>
            <div className='user-room-left-wish'>
                <div className='user-room-left-wish-text'>User's Rooms</div>
                <div className='user-room-left-wish-card'>
                    <div className='user-room-top-button-options'>Open Code Editor</div>
                </div>
            </div>
            <div className='user-room-left-chat-space'>
                <div className='user-room-left-chat-title'>Chat Space</div>
                <div className='user-room-left-chat-card'></div>
            </div>
            <div className='user-room-left-bottom-options'>
                    <div className='user-room-left-button-options'>Video Call</div>
                    <div className='user-room-left-button-options'>Present Screen</div>
                    <div className='user-room-left-button-options'>Audio Call</div>
            </div>
        </div>
        <div className='user-room-right'>
            <div className='user-room-task-remaining'><ToDo /></div>
            
            <div className='user-room-music-player'>
                <div className='user-room-music-player-title'>Music Player</div>
                <div className='user-room-music-player-card'></div>
            </div>
        </div>
    </div>)
}

export default UserRooms;