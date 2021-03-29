import React from 'react'

export default function Post(props) {
  let element = "";
  if(JSON.stringify(props.postData) == JSON.stringify({})){
    element =     
    <div className='col-span-8 bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl'>
      Post
    </div>
  }else{
    element = 
    <div className='col-span-8 bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl'>
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
