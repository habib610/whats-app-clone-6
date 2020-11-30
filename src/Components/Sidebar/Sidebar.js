import { Avatar, IconButton } from '@material-ui/core';
import {  DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import React from 'react';
import './Sidebar.css'
import SidebarChat from './SidebarChat';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_kQEIDcT8LqJ3X5om0dU7lL02N3vXG7JHjkmeNBg=s32-c-mo"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                    <DonutLarge/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search Or start new chat" />
                </div>
            </div>
            <div className="sidebar_chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>
        </div>
    );
};

export default Sidebar;