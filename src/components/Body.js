import React , { useState, useEffect } from 'react'
import CreatePost from './CreatePost';
import Homepage from './Homepage';
import Search from './Search';

export default function Body(props) {
  const [triggerRefresh,setTriggerRefresh] = useState(0);
  let data = require('../data/posts.json');
  let element = "";
  
  // const [apiResponse, setApiResponse] = useState({})
  // useEffect(() => {
  //   var raw = "";
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
  //   fetch("http://localhost:5000/posts", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       // console.log(JSON.parse(result))
  //       if(JSON.stringify(apiResponse) !== JSON.stringify(formatAPIResponse(JSON.parse(result)))){
  //         console.log("New data found, updating...");
  //         setApiResponse(formatAPIResponse(JSON.parse(result)))
  //       }
  //     })
  //     .catch(error => console.log('error', error));
  // })

  // useEffect(() => {
  //   var raw = "";
  //   var requestOptions = {
  //     method: 'GET',
  //     redirect: 'follow'
  //   };
  //   fetch("http://localhost:5000/posts", requestOptions)
  //     .then(response => response.text())
  //     .then(result => {
  //       // console.log(JSON.parse(result))
  //       setApiResponse(formatAPIResponse(JSON.parse(result)))
  //     })
  //     .catch(error => console.log('error', error));
  //   console.log("Second useEffect");
  // },[triggerRefresh])

  // const formatAPIResponse = (apiResponse) => {
  //   let postArr = apiResponse.posts;
  //   let postList = {};
  //   for(const post of postArr){
  //     postList[post.id] = post;
  //   }
  //   return postList;    
  // }
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
  //find max idea of the current items in the post
  const getMaxId = (data) => {
    let maxId = 0;
    Object.keys(data).map((key) => {
      if(parseInt(key) > maxId){
        maxId = parseInt(key);
      }
    })
    return maxId;
  }
  // console.log("FROM Body");
  // console.log(apiResponse)
  
  if(props.content == 'Search'){
    return <Search />
  }else if(props.content == 'Create'){
    return <CreatePost add={addItem}/>
  }else{
    return <Homepage/>
  }
  return (
    <>
      {element}
    </>
  )
}
