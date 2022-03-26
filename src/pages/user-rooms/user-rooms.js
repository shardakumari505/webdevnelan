import React from 'react';
import './user-rooms.scss';
import ToDo from '../../components/to-do-list/to-do';


const UserRooms = () => {
    return (
    <div className='user-room-page'>
        <div className='user-room-left'>
            <div className='user-room-left-wish'>
                <div className='user-room-left-wish-text'>User's Rooms</div>
            </div>
            <div className='user-room-left-chat-space'>
                <div className='user-room-left-chat-title'>Chat Space</div>
                <div className='user-room-left-chat-card'></div>
            </div>
            <div className='user-room-left-bottom-options'>
                    <div className='user-room-left-button-options'><img className='user-room-left-button-img' src="https://cdn-icons-png.flaticon.com/512/1159/1159798.png" /></div>
                    <div className='user-room-left-button-options'><img className='user-room-left-button-img' src="https://cdn-icons.flaticon.com/png/512/3793/premium/3793636.png?token=exp=1648329031~hmac=22d16b04400a09d797a233d41c3a8b08" /></div>
                    <div className='user-room-left-button-options'><img className='user-room-left-button-img' src="https://cdn-icons.flaticon.com/png/512/5124/premium/5124626.png?token=exp=1648329081~hmac=314a46a0771f00d17500a29164f61671" /></div>
            </div>
        </div>
        <div className='user-room-right'>
            <div className='user-room-task-remaining'><ToDo /></div>
            
            <div className='user-room-music-player'>
                <div className='user-room-music-player-title'>Playing...</div>
                <div className='user-room-music-player-card'><img className='user-room-music-player-img' src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" /></div>
                <div className='user-room-music-player-options'>
                    <div className='user-room-music-player-join-option'>Join and Listen</div>
                </div>
            </div>
        </div>
    </div>)
}

export default UserRooms;