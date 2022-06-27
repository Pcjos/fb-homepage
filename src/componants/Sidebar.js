import React from 'react'
import { useState } from 'react'
import postData from './data/posts.json';




export const Sidebar = (props) => {
    const [state,setState]=useState([
        { id:1, image:'/images/img1.png' , name:'React Js Development'},
        { id:2, image:'/images/image4.jfif' , name:'Zero waste Lifestyle India'},
        { id:3, image:'/images/image5.jfif' , name:'Deepika Padukone Fan club'},
        { id:4, image:'/images/image3.jfif' , name:'Kajal Oza Vaidya'},
        { id:5, image:'/images/img2.jfif' , name:'Freelance India'},
    ]);
    const current_user=props.data.map(user=>(user));
 const [user,setUser]=React.useState(current_user)
  return (
    <div className='sidebar'>
      <div className='sidebar_list' >
              <div className='sidebar_list-img'>
                   <img src={user[0].user.profile_picture} alt='Group image'></img>
              </div>
              <div className='sidebar_list-name'>{user[0].user.name}  </div>
              </div>

              <div className='sidebar_list_user' >
              Your Shortcuts
              </div>


        {state.map(info=>(
              <div className='sidebar_list' key={info.id}>
              <div className='sidebar_list-img'>
                   <img src={info.image} alt='Group image'></img>
              </div>
              <div className='sidebar_list-name'>{info.name}  </div>
              </div>
        ))}
      
             </div>
  )
}
export default Sidebar
