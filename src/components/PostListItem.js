import React from 'react'

export default function PostListItem(props) {

  //Handles the user interaction with a specific post
  const handleClick = () => {
    props.changeDisplayPost(props.listNum);
    props.onClick(props.listNum)
  }
  return (
    <div onClick={handleClick} className={`bg-white hover:not(.active)bg-gray-100 border border-gray-400 rounded shadow-xl my-1 mx-1 post-item  ${props.active ? "active" : ""}`}>
      <p className="text-gray-800 post-title">
        {props.data.title}
      </p>
      <div className="grid grid-cols-2">
        <p className="text-xs text-gray-300 post-city text-left px-2">
          {new Date(props.data.postdate * 1000).toDateString()}
        </p>
        <p className="text-xs text-gray-300 post-city text-right px-2">
        {props.data.city}, FL
        </p>
      </div>
    </div>
  )
}
