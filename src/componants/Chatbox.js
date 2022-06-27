import React from 'react'
import {FaVideo,FaPhone,FaRegWindowClose} from 'react-icons/fa'

const Chatbox = (props) => {
    const closeChat = () =>
    {
        props.closeChat();
    }
  return (
    <>
    {props.state ? ( <div className='chat'>
        <div className='chat_header'>
            <div className='chat_first'>
            <div className='chat_header-img'>
                <img src={props.current_chat_image?props.current_chat_image.images  :''} alt='user'></img>
            </div>
            <div className='chat_header-name'>
            {props.current_chat_image?props.current_chat_image.name  :''}
            </div>
            </div>
            <div className='chat_second'>
                <FaVideo className='chat_icons'></FaVideo>
                <FaPhone  className='chat_icons'></FaPhone>
                <FaRegWindowClose  className='chat_icons' onClick={closeChat}></FaRegWindowClose>
            </div>
            
            
        </div>
        <div className='chat_body'>
          <div className='chat_left'>
            <p className='chat_msg'>
                Hello There..!
            </p>
          </div>
          <div className='chat_right'>
            <p className='chat_msg'>
                How are you?
            </p>
          </div>
        </div>
        <div className='chat_footer'>
            <input className='chat_input' placeholder='Aa'></input>
        </div>
    </div>) : ''}
   
    </>
  )
}

export default Chatbox