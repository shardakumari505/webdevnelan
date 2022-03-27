import React from 'react';
import './user-rooms.scss';
import Navbar from '../../components/navbar-component/navbar.component';
import ToDo from '../../components/to-do-list/to-do';
import ChatWidget from '../../components/chat-widget/chatwidget';



const UserRooms = () => {
    return (
    <div className='user-room-page'>
        <Navbar />
        <div className='user-room-your-chamber'>
            <div className='user-room-chamber-title'>Your Chamber</div>
        </div>
        <div className='user-room-bottom-container'>
            <div className='user-room-left'>
                <div className='user-room-your-task-card'>
                    <ToDo />
                </div>
            </div>
            <div className='user-room-centre'>
            
                        <ChatWidget />
                    
            </div>
          
        </div>
    </div>)
}

export default UserRooms;