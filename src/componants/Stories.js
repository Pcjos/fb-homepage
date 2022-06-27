import React from 'react'
import { useState } from 'react'


export const Stories = (props) => {
  const dp=props.data.map(pic=>(
    pic.user.profile_picture
));
const [profile_picture,setProfile_picture]=React.useState(dp);

    const [state,setState]=useState([
        { id:2,dp:'/images/chan.jpg' , image:'/images/chandler.png' , name:'Chandler Bing'},
        { id:3, dp:'/images/image5.jfif' ,image:'/images/image7.jpg' , name:'Deepika Padukone Fan club'},
        { id:4,dp:'/images/tier5_pp.png' , image:'/images/eday.jpg' , name:'Tier5'},
        { id:5, dp:'/images/free.jfif' ,image:'/images/img2.jfif' , name:'Freelance India'},

    ]);
  return (
    <div className="stories">
      <div className='stories_col' >
         <div className='stories_body'>
             <img src={profile_picture[0]} alt='story'/>
            <div className='stories_body-overlay'>
            <div className='stories_body_overlay-img'>
                 <img src="./images/add.png"  alt='story'/>
                 </div>
                 <div className='stories_body-name' >Create Story</div>
             </div>            

         </div>
     </div>


       {state.map(story =>(
         <div className='stories_col' key={story.id}>
         <div className='stories_body'>
             <img src={story.image} alt='story'/>
            <div className='stories_body-overlay'>
                 <div className='stories_body_overlay-img'>
                 <img src={story.dp}  alt='story'/>
                 </div>
                 <div className='stories_body-name'>{story.name}</div>
             </div>            

         </div>
     </div>

      
       ))}
        
    </div>
  )
}
export default Stories
