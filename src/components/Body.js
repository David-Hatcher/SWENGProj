import React , { useState } from 'react'
import CreatePost from './CreatePost';
import Homepage from './Homepage';
import Search from './Search';

export default function Body(props) {
  let data = require('../data/posts.json');
  let element = "";
  const addItem = (item) => {
    data[getMaxId(data) + 1] = item;
    props.goToSearch();
  }
  const getMaxId = (data) => {
    let maxId = 0;
    Object.keys(data).map((key) => {
      if(parseInt(key) > maxId){
        maxId = parseInt(key);
      }
    })
    return maxId;
  }
  if(props.content == 'Search'){
    element = <Search data={data}/>
  }else if(props.content == 'Create'){
    element = <CreatePost add={addItem}/>
  }else{
    element = <Homepage/>
  }
  return (
    <>
      {element}
    </>
  )
}
