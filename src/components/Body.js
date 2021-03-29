import React , { useState } from 'react'
import CreatePost from './CreatePost';
import Homepage from './Homepage';
import Search from './Search';

export default function Body(props) {
  let data = require('../data/posts.json');
  console.log(data)
  let element = "";
  if(props.content == 'Search'){
    element = <Search data={data}/>
  }else if(props.content == 'Create'){
    element = <CreatePost/>
  }else{
    element = <Homepage/>
  }
  return (
    <>
      {element}
    </>
  )
}
