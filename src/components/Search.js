import React, { useState } from 'react'
import Filter from './Filter'
import Post from './Post'
import PostList from './PostList'

export default function Search(props) {
  const [postData, setPostData] = useState({});
  const [data, setData] = useState(props.data);
  const changeDisplayPost = (postNum) => {
    if(postData == props.data[postNum]){
      setPostData({});
    }else{
      setPostData(props.data[postNum]);
    }
  }
  const updateFilterResults = (newData) => {
    setData(newData);
  }
  const resetFilterResults = () => {
    setData(props.data);
  }
  return (
    <div className='grid grid-cols-12 mx-3 min-h-90 relative'>
      <Filter data={props.data} reset={resetFilterResults} update={updateFilterResults}/>
      <PostList data={data} changeDisplayPost={changeDisplayPost}/>
      <Post postData={postData}/>
    </div>
  )
}
