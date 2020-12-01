import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic,  MoreVert, SearchOutlined } from '@material-ui/icons';
import axios from './../../axios';
import React, { useState } from 'react';
import './Chat.css'
const Chat = ({messages}) => {

    const [input, setInput] = useState("")

    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: "Rahman",
            timestamp: "Just Now",
            received: false
        })
        setInput("")
    }
    return (
        <div className="chat">
       <div className="chat_header">
       <Avatar src="https://lh3.googleusercontent.com/-0uDiDEJRIjY/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucn44-kte7qHP0SdIrB0xuvxXGQX7A/s48-c/photo.jpg"/>
         <div className="chat_headerInfo">
             <h4>Rahman</h4>
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
           {
               messages.map(message => (
                <p className={`chat_message ${message.received && "chat_receiver"}`}>
               <span className="chat_name">{message.name} </span>
               {message.message}
               <span className="chat_timestamp">
                   {message.timestamp}
               </span>
           </p>
               ))
           }
       </div>
       <div className="chat_footer">
           <InsertEmoticon/>
           <form >
               <input 
               value={input} 
               onChange={(e)=> setInput(e.target.value)} type="text" 
               placeholder="Type a message"/>
               <button onClick={sendMessage} type="submit"> send Message </button>
           </form>
           <Mic/>
       </div>
        </div>
    );
};

export default Chat;