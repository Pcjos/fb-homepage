import React from 'react'
import { FaRegThumbsUp, FaRegCommentAlt } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'

const ShowPosts = (props) => {
    const [like, setLike] = React.useState(false);



    return (

        <div className='showPosts' >
            {props.data.map((postDetails, index) => (

                postDetails.posts.map((post, index2) => (

                    <div className='empty'>
                        <div className='showPostHeader' >
                            <div className='showPost_header-image'>
                                <img src={post.user.profile_picture} alt='user image'></img>
                            </div>
                            <div className='showPost_header-name'>
                                {post.user.name}
                                <div className='date'>{post.posted_on}</div>
                            </div>
                        </div>

                        <div className='showPosts_body'>
                            <div className='showPosts_body-text'>
                                {post.user.post_text}
                            </div>
                            <div className='showPosts_body-img'>
                                <img src={post.user.post_image} alt='post image'></img>
                            </div>
                        </div>
                        <div className='showPost_reactions'>
                            <span className='reactions'>
                                <FaRegThumbsUp
                                    className={like ? 'liked' : 'notliked'}
                                    onClick={() => setLike(!like)} />

                                <span 
                                className={like ? 'liked' : 'notliked'}
                                onClick={() => setLike(!like)}
                                >Like</span>
                            </span>
                            <span className='reactions'>
                                <FaRegCommentAlt /><span className='reactions-text'>Comments</span>
                            </span>
                            <span className='reactions'>
                                <RiShareForwardLine /><span className='reactions-text'>Share</span>
                            </span>
                        </div>
                        <div className='comments_show'>
                            {post.comments.map((comment, index3) => (
                                <div className='comments_display'>
                                    <span className='showPost_header-image'>
                                        <img src={comment.user.profile_picture}></img>
                                    </span>

                                    <span className='comment'>

                                        <div className='comment_username'>
                                            <b>{comment.user.name}</b>
                                            <div className='commment_text'>{comment.text}</div>
                                        </div>
                                    </span>
                                </div>
                            ))}
                            <div className='comments_display'>
                                <span className='showPost_header-image'>
                                    <img src={props.data[0].user.profile_picture}></img>
                                </span>
                                <span>
                                    <input placeholder='Write a comment...' className='write_comment'></input>
                                </span></div>
                        </div>

                    </div>
                ))

            ))}
        </div>

    )
}

export default ShowPosts