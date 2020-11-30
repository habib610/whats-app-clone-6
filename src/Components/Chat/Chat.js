import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MicNoneOutlined, MoreVert, SearchOutlined, Send } from '@material-ui/icons';
import React from 'react';
import './Chat.css'
const Chat = () => {
    return (
        <div className="chat">
       <div className="chat_header">
       <Avatar/>
         <div className="chat_headerInfo">
             <h4>Room Name</h4>
             <p>Last seen....</p>
         </div>
         
         <div className="chat_headerRight">
             <IconButton>
            <SearchOutlined/>
             </IconButton>
             <IconButton>
            <AttachFile/>
             </IconButton>
             <IconButton>
            <MoreVert/>
             </IconButton>
         </div>
       </div>
       <div className="chat_body">
           <p className="chat_message">
               <span className="chat_name">Habib </span>
               This is message 
               <span className="chat_timestamp">
                   {new Date().toUTCString()}
               </span>
           </p>
           <p className="chat_message">
               <span className="chat_name">Habib </span>
               This is message 
               <span className="chat_timestamp">
                   {new Date().toUTCString()}
               </span>
           </p>
           <p className="chat_message chat_receiver">
               <span className="chat_name">Habib </span>
               This is Receiver
               <span className="chat_timestamp">
                   {new Date().toUTCString()}
               </span>
           </p>
           <p className="chat_message">
               <span className="chat_name">Habib </span>
               This is message 
               <span className="chat_timestamp">
                   {new Date().toUTCString()}
               </span>
           </p>
       </div>
       <div className="chat_footer">
           <InsertEmoticon/>
           <form action="">
               <input type="text" placeholder="Type a message"/>
               <button> <Send/> </button>
           </form>
           <Mic/>
       </div>
        </div>
    );
};

export default Chat;