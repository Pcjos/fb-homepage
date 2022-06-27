import React from 'react'
import Stories from './Stories'
import CreatePost from './CreatePost'
import ShowPosts from './ShowPosts'


export const Posts = (props) => {
  return (
    <div className='posts'>
       <Stories data={props.data}></Stories>
       <CreatePost data={props.data}></CreatePost>
       <ShowPosts data={props.data}></ShowPosts>
    </div>
  )
}
export default Posts