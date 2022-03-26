import React from 'react';
import './user-rooms.scss';
import ToDo from '../../components/to-do-list/to-do';
import Music from '../../components/music-player/music-player';


const UserRooms = () => {
    return (
    <div className='user-room-page'>
        <div className='user-room-music-player'>
        <Music/>
        </div>
        <div className='user-room-your-chamber'>

        </div>
        <div className='user-room-bottom-container'>
            <div className='user-room-left'>
                
            </div>
            <div className='user-room-centre'>

            </div>
            <div className='user-room-right'>
                
            </div>
        </div>
    </div>)
}

export default UserRooms;