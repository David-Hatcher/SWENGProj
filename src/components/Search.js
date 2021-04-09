import React, { useState, useEffect } from 'react'
import logo from './../images/logo.png'
import Filter from './Filter'
import Post from './Post'
import PostList from './PostList'

export default function Search(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    var raw = "";
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5000/posts", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, [])
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
      <div className="grid grid-rows-2 col-span-2">
        <Filter data={props.data} reset={resetFilterResults} update={updateFilterResults}/>
        <img 
          className={`my-5 rounded`}
          src={logo}/>
      </div>
      <PostList data={data} changeDisplayPost={changeDisplayPost}/>
      <Post postData={postData}/>
    </div>
  )
}
