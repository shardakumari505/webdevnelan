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
            <div className='hamburger-menu-icon-divs'><img className='hamburger-menu-icon-img' src='https://cdn-icons.flaticon.com/png/512/5949/premium/5949501.png?token=exp=1648341605~hmac=8842ca55e53329ed18019ec6f6d559c0' /></div>
            <div className='user-room-chamber-title'>Your Chamber</div>
        </div>
        <div className='user-room-bottom-container'>
            <div className='user-room-left'>
                <div className='user-room-your-task-card'>
                    <ToDo />
                </div>
            </div>
            <div className='user-room-centre'>
                <div className='user-room-chat-card'>
                    <div className='user-room-chat-card-top'>
                        <div className='user-room-chat-card-options'><img className='user-room-chat-card-options-img' src='https://cdn-icons-png.flaticon.com/128/1159/1159798.png' /></div>
                        <div className='user-room-chat-card-options'><img className='user-room-chat-card-options-img' src='https://cdn-icons.flaticon.com/png/128/3793/premium/3793636.png?token=exp=1648336321~hmac=962ec0ee0c99ce16174cffaaa0e2a416' /></div>
                        <div className='user-room-chat-card-options'><img className='user-room-chat-card-options-img' src='https://cdn-icons.flaticon.com/png/512/5124/premium/5124626.png?token=exp=1648336382~hmac=1c5cb27f05a661c1e6f2661a6632f7af' /></div>
                        <div className='user-room-chat-card-options'><img className='user-room-chat-card-options-img' src='https://cdn-icons.flaticon.com/png/512/5718/premium/5718983.png?token=exp=1648336462~hmac=4b4226d6cc0fb5ed8542766d7a77f35b' /></div>
                    </div>
                    <div className='user-room-chat-card-centre'></div>
                    <div className='user-room-chat-card-bottom'>
                        <div className='user-room-chat-card-bottom-option-msg'><input className='user-room-msg-input' type='text' placeholder='Type a message' /></div>
                        <div className='user-room-chat-card-bottom-options'><img className='user-room-chat-card-bottom-options-img' src='https://cdn-icons.flaticon.com/png/512/3634/premium/3634313.png?token=exp=1648336563~hmac=2216b38a1d5aa85f12e2ea8968f97078' /></div>
                        <div className='user-room-chat-card-bottom-options'><img className='user-room-chat-card-bottom-options-img' src='https://cdn-icons-png.flaticon.com/512/54/54719.png' /></div>
                        <div className='user-room-chat-card-bottom-button-options'>Send</div>
                    </div>
                </div>
            </div>
            <div className='user-room-right'>
                <div className='user-room-member-card'>
                    <h2>Moderator</h2>
                </div>
            </div>
        </div>
    </div>)
}

export default UserRooms;