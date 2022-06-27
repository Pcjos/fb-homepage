import React from 'react'
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa"


const CreatePost = (props) => {

    const current_user=props.data.map(userdata=>(userdata));
    const [user,setUser]=React.useState(current_user)

    return (
        <div className='createPost'>
            <div className='createFirst'>
                <div className='createFirst-img'>
                    <span>
                        <img src={user[0].user.profile_picture} alt="user" />
                    </span>
                </div>

                <div className='createFirst-input'>
                    <input type="text" className='createFirst-inputPost' placeholder={'What\'s on your mind,'+user[0].user.name+'?'} ></input>
                </div>
            </div>


            <div className='createSecond'>
                <span className='create_second-icon'>
                    <FaVideo className="redColor"></FaVideo>
                    <span className='text' >Live Video</span>
                </span>
                <span className='create_second-icon'>
                    <FaRegFileImage className="greenColor"></FaRegFileImage>
                    <span className='text'>Photo/Video</span>
                </span>
                <span className='create_second-icon'>
                    <FaRegGrinAlt className="orangeColor"></FaRegGrinAlt>
                    <span className='text'>Feeling/Activity</span>
                </span>
            </div>
        </div>
    )
}

export default CreatePost