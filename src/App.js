import React from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import  Sidebar from './componants/Sidebar';
import  Posts from './componants/Posts';
import ChatBar from './componants/ChatBar'
import Chatbox from './componants/Chatbox';
import fbdata from './componants/data/posts.json'



function App() {
  const [state,setState] =React.useState(false);
  const  [current_chat_image,setCurrent_chat_image]=React.useState("");
  const [data,setData]=React.useState(fbdata);
  

  const openChat=user => {
    setState(true)
    setCurrent_chat_image(user)
  }

  const closeChat = () =>{
    setState(false)
  } 

 
  return (
    <div className="App">

     
     <Navbar data={data} ></Navbar>
     <div className='facebook'>
     <Sidebar data={data}></Sidebar>
     <Posts data={data}></Posts>
     <ChatBar openChat={openChat}></ChatBar>
     <Chatbox state={state} current_chat_image={current_chat_image} closeChat={closeChat}></Chatbox>
     </div>
     
    </div>
  );
}

export default App;
