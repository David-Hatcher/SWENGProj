import React from 'react'

export default function Post(props) {
  let element = "";

  //Check if the passed post is empty, if not then show it on the post component
  if(JSON.stringify(props.postData) == JSON.stringify({})){
    element =     
    <div className='col-span-8 bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl'>
      Post
    </div>
  }else{
    element = 
    <div className='inline-block col-span-8 bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl mx-2 relative'>
      <div className="text-4xl my-2">{props.postData.title}</div>
      <img
        className="w-3/6 myl-25 rounded max-h-80 object-contain"
        src={props.postData.image}/>
      <p>Category: {props.postData.category}</p>
      <p className="mt-10 m-auto max-w-max">{props.postData.description}</p>
      <div className="align-baseline mx-1"
          style={{position:'absolute',bottom:0}}>
        <p>{new Date(props.postData.postdate * 1000).toDateString()}</p>
      </div>      
    </div>
  }
  return (
    element
  )
}
