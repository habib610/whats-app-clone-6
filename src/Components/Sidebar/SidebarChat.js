import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css'
const SidebarChat = () => {
    return (
        <div className="sidebar_chat">
            <Avatar src="https://lh3.googleusercontent.com/-wGbVsXHtDdI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnEac_8_tE0CmQnBJvkGkDUgXDojQ/s48-c/photo.jpg"/>
            <div className="sidebar_chatInfo">
                <h4>Room Name</h4>
                <p>This is last message</p>
            </div>
        </div>
    );
};

export default SidebarChat;