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

  //update the post state to be passed to the preview and submit
  const updatePreview = (post) => {
    setPost(post);
  }
  
  //handle the submit click
  const submit = () => {
    if(validateInput()){
      props.add(post);
    }
  }

  //check that input is properly formatted
  const validateInput = () => {
    let alertString = "";
    if(post.title === ""){
      alertString += "Post must have a title.\n";
    }
    if(post.image === "" || !post.image.includes("http")){
      alertString += "Image must be present and hosted by third party.\n";
    }
    if(post.zip === "" || post.zip.length < 5){
      alertString += "Posts must have a zip.\n";
    }
    if(post.city === ""){
      alertString += "Posts must have a city.\n";
    }
    if(post.category === ""){
      alertString += "Posts must have a category.\n";
    }
    if(post.startdate === "" || post.enddate === ""){
      alertString += "Posts must have a start and end date.\n";
    }
    if(alertString.length > 0){
      alert(alertString);
      return false;
    }
    return true;
  }

  return (
    <div className='grid grid-cols-2 h-9-10'>
      <CreateForm update={updatePreview} submit={submit}/>
      <div className='h-9-10'>
        <PostPreview postData={post}/>
      </div>
    </div>
  )
}
