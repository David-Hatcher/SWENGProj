import React, { useState } from 'react';
import PostListItem from './PostListItem';

export default function PostList(props) {
  const [chosen,setChosen] = useState();
  const handleClick = (key) => {
    if(key == chosen){
      setChosen("");
    }else{
      setChosen(key);
    }
  }
  return (
    <div className='col-span-2 grid-rows-8 bg-gray-600 border border-gray-400 rounded shadow-xl mx-2'>
      {Object.keys(props.data).map((key) => 
        <PostListItem 
          data={props.data[key]}
          key={key}
          listNum={key}
          active={key === chosen}
          changeDisplayPost={props.changeDisplayPost}
          onClick={handleClick}/>
      )}
    </div>
  )
}
