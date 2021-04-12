import React from 'react'

export default function Post(props) {
  let element = "";
  //Handles post preview for the create post page
  if(JSON.stringify(props.postData) == JSON.stringify({})){
    element =     
    <div className='col-span-8 bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl'>
      Post
    </div>
  }else{
    element = 
    <div className='h-full bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl'>
        <p className="h-1-10 text-black font-bold">POST PREVIEW</p>
      <div>{props.postData.title}</div>
      <img
        className="w-3/6 myl-25"
        src={props.postData.image}/>
      <p>{props.postData.description}</p>
    </div>
  }
  return (
    element
  )
}
