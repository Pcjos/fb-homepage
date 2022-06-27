import React from 'react'

const ChatBar = (props) => {

    const [state,setState]=React.useState([
        {id:1, images:"/images/aarya.jpg",name:"Aarya Stark"},
        {id:2, images:"/images/monica.jfif",name:"Monica Geller"},
        {id:3, images:"/images/rachel.avif",name:"Rachel Green"},
        {id:4, images:"/images/indu.jfif",name:"Indravadan Sarabhai"},
        {id:5, images:"/images/ratan.jfif",name:"Ratan Tata"},
        {id:6, images:"/images/image7.jpg",name:"Depika Padukone"},
      
    ])
    const openChat = (user) => {
        props.openChat(user); 
    }
  return (
    <div className='chatbar'>
        {state.map(user => (
              <div className='chatbar_list' key={user.id} onClick={()=>openChat(user)}>
              <div className='chatbar_list-img'>
                  <span className='status'></span>
                  <img src={user.images} alt='user'></img>
              </div>
              <div className='chatbar_list-name'> {user.name}  </div>
          </div>
        ))}
      
    </div>
  )
}

export default ChatBar