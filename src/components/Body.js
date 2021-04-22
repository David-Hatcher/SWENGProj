import React , { useState, useEffect } from 'react'
import CreatePost from './CreatePost';
import Homepage from './Homepage';
import Search from './Search';

export default function Body(props) {
  let element = "";
  
  //Add an item to the post to the list
  const addItem = (item) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(item);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    console.log(raw)

    fetch("http://localhost:5000/posts", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      setTimeout(() => {
        props.goToSearch();
      },1000)
  }


  if(props.content == 'Search'){
    return <Search />
  }else if(props.content == 'Create'){
    return <CreatePost add={addItem}/>
  }else{
    return <Homepage/>
  }

}
