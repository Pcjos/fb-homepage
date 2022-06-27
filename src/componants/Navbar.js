import React from 'react'
import { FaFacebook, FaSistrix, FaHome, FaVideo, FaUsers, FaGamepad, FaBell, FaFacebookMessenger } from "react-icons/fa"
import { BsFillChatDotsFill } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import {AiOutlineShop} from "react-icons/ai"




function Navbar(props) {

    const dp=props.data.map(pic=>(
         pic.user.profile_picture
    ));
    const [profile_picture,setProfile_picture]=React.useState(dp)
    return (
        <div>
            <div className='navbar'>
                <div className='navbar_search'>
                    <div className='search_logo'>
                        <FaFacebook className='navbar_logo'></FaFacebook>
                    </div>
                    <div className='searchbar'>
                        <input type="text" className='search_text' placeholder='Search Facebook'></input>
                        <FaSistrix className='search_icon' />
                    </div>
                </div>



                <div className='navbar_middle_icons'>
                    <span className='middle_icon'>
                        <FaHome className='navbar_icon'></FaHome>
                    </span>
                    <span className='middle_icon'>
                        <AiOutlineShop className='navbar_icon'></AiOutlineShop>
                    </span>
                    <span className='middle_icon'>
                        <FaVideo className='navbar_icon'></FaVideo>
                        <span className='navbar_notify'>2</span>
                    </span>
                    <span className='middle_icon'>
                        <FaUsers className='navbar_icon' />
                    </span>
                    <span className='middle_icon'>
                        <FaGamepad className='navbar_icon' />
                        <span className='navbar_notify'>7</span>

                    </span>

                </div>


                <div className='navbar_last_icons'>
                    <span className='last_icons'>
                        <TbGridDots></TbGridDots></span>
                    <span className='last_icons'>
                        <FaFacebookMessenger></FaFacebookMessenger></span>
                    <span className='last_icons'>
                        <FaBell></FaBell></span>
                    <span className='last_icons'>
                        <img src={profile_picture[0]} className='user_profile-picture'></img></span>


                </div>
            </div>
        </div>
    )
}

export default Navbar