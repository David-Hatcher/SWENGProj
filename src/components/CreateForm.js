import React, { useState, useEffect } from 'react'
import ReactDayPicker from './ReactDayPicker';

export default function CreateForm(props) {
  const [title,setTitle] = useState("");
  const [image,setImage] = useState("");
  const [category,setCategory] = useState("");
  const [zip,setZip] = useState("");
  const [description,setDescription] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [city,setCity] = useState("");
  let postData = {};

  //useEffect will trigger when one of the states are updated to update the preview
  useEffect(() => {
    populatePost();
    props.update(postData);
  },[title,image,category,zip,description,startDate,endDate,city])
  
  //Functions used to update the state for each of the fields
  
  const updateZip = (event) => {
    setZip(event.target.value);
  }
  const updateStartDate = (date) => {
    setStartDate(date.getTime()/1000);
  }  
  const updateEndDate = (date) => {
    setEndDate(date.getTime()/1000);
  }
  const updateCity = (event) => {
    setCity(event.target.value);
  }
  const updateCategory = (event) => {
    setCategory(event.target.value);
  }
  const updateDescription = (event) => {
    setDescription(event.target.value);
  }
  const updateTitle = (event) => {
    setTitle(event.target.value);
  }
  const updateImage = (event) => {
    setImage(event.target.value);
  }
  //End update state functions

  //Update the postData json to be passed to the preview and the AddPost functionality
  const populatePost = () => {
    postData.title = title;
    postData.image = image;
    postData.category = category;
    postData.zip = zip;
    postData.description = description;
    postData.startDate = startDate;
    postData.endDate = endDate
    postData.city = city;
    postData.postdate = parseInt(new Date().getTime() / 1000);
  }
  //sumbit button handler
  const handleClick = (event) => {
    props.submit()
  }
  return (
    <div className="flex items-center justify-center h-9-10 bg-gray-600 text-gray-200 font-semibold border border-gray-400 rounded shadow-xl mx-3">
      <form className="grid-rows-8">
        <div className='my-3'>
          <label>
            Post Title:
            <input
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl"
              type="text"
              onChange={updateTitle}/>
          </label>
        </div>
        <div className='my-3'>
          <label>
            Image Url:
            <input
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl"
              type="text"
              onChange={updateImage}/>
          </label>
        </div>
        <div className='my-3'>
          <label>
            Category:
            <input
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl"
              type="text"
              onChange={updateCategory}/>
          </label>
        </div>
        <div className='my-3'>
          <label>
            Zipcode:
            <input
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl"
              type="text"
              onChange={updateZip}/>
          </label>
        </div>
        <div className='my-3'>
          <label>
            City:
            <input
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl"
              type="text"
              onChange={updateCity}/>
          </label>
        </div>
        <div className='my-3'>
          <label>
            Description:
            <textarea
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl"
              onChange={updateDescription}/>            
          </label>
        </div>
        <div className="my-1">
          <label>Start Date:
            <ReactDayPicker key={"start"} onChange={updateStartDate}/>
          </label>
        </div>
        <div className="my-3">
          <label>End Date:
            <ReactDayPicker key={"end"} onChange={updateEndDate}/>
          </label>
        </div>
      </form>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-3" onClick={ () => {
          handleClick()
          }}>
          Submit
        </button>
    </div>
  )
}
