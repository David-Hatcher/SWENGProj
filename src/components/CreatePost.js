import React, { useState, useEffect } from 'react'
import CreateForm from './CreateForm';
import PostPreview from './PostPreview';

export default function CreatePost(props) {
  const [title,setTitle] = useState("");
  const [post,setPost] = useState({
    "title": "",
    "image": "",
    "zip" : "",
    "city" : "",
    "category" : "",
    "postdate" : "",
    "startdate" : "",
    "enddate" : "",
    "description" : ""
  });

  const updatePreview = (post) => {
    setPost(post);
    console.log(post);
  }
  const submit = () => {
    props.add(post);
  }
  return (
    <div className='grid grid-cols-2 h-9-10'>
      <CreateForm update={updatePreview} submit={submit}/>
      <div className='h-9-10'>
        <p className="h-1-10">POST PREVIEW</p>
        <PostPreview postData={post}/>
      </div>
    </div>
  )
}
