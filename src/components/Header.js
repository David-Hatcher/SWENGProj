import React from 'react'

export default function Header(props) {
  let buttonStart = 8;
  return (
    <div className='header grid grid-cols-12 gap-4 '>
      <h1 className='title my-3'><a style={{cursor:'pointer'}} onClick={props.showHomepage}>App</a></h1>
      <button 
        className={`col-start-${buttonStart} bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-3`}
        onClick={props.showSearch}
      >
        Search
      </button>
      <button 
        className={`col-start-${buttonStart + 2} bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-3`}
        onClick={props.showCreate}
      >
        Post
      </button>
    </div>
  )
}
