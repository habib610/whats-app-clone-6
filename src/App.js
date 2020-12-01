import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import axios from './axios'


function App() {
const [messages, setMessages] = useState([])
  useEffect(()=> {
    axios.get('messages/sync')
    .then(res => {
      setMessages(res.data)
    })
  }, [])

  useEffect(() => {
    var pusher = new Pusher('b9a71420ffe3139b0e8d', {
      cluster: 'ap4'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages)=> {
      // alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages)
  return (
    <div className="app">
      <div className="app_body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
