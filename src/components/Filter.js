import React, { useState, useEffect } from 'react'
import ReactDayPicker from './ReactDayPicker';

export default function Filter(props) {
  const [data,setData] = useState(props.data);
  const [zip, setZip] = useState("All");
  const [keyword, setKeyword] = useState(null);
  const [category,setCategory] = useState("All");
  const [city,setCity] = useState("All");
  const [startDate,setStartDate] = useState(null);
  const [endDate,setEndDate] = useState(null);
  const [dayKey,setDayKey] = useState(1);
  useEffect(() => {
    filterData(data);
  },[keyword,zip,category,city,startDate,endDate]);//Only filter data on changes to the states
  let filterList = {};
  const buildFilters = (data) => {
    Object.keys(data).map((key) => {
      addCurrentItems(data[key]);
    })
  }
  const addCurrentItems = (cur) => {
    Object.keys(cur).map((key) => {
      addOnePair(key,cur[key]);
    })
  }
  const addOnePair = (key,value) => {
    if(filterList.hasOwnProperty(key)){
      if(!filterList[key].includes(value)){
        filterList[key] = [...filterList[key],...[value]];
      }
    }else{
      filterList[key] = [value];
    }
  }

  buildFilters(props.data);

  //Function used to generate options on a map call.
  const generateOption = (data) => {
    return <option>{data}</option>;
  }

  //START: Functions used to build the different DOM elements of the filter
  const generateCategories = (catList) => {
    catList.unshift("All");
    return  <div className="my-2"><label>
              <div className="grid grid-cols-2">
                <div>
                  Category:
                </div>
                <div>
                  <select className='text-black' onChange={updateCategory}>
                    {catList.map(generateOption)}
                  </select>
                </div>
              </div>
      
      
      

            </label></div>;
  }
  const generateKeyword = () => {
  return  <div className="my-1 text-center"><label>Keyword Search:<br></br>
            <input
              className="bg-white text-gray-800 font-semibold border border-gray-400 rounded shadow-xl flex-grow"
              name='keyword'
              type='text'
              placeholder="Type Keywords..."
              onChange={updateKeyword}/>
            </label></div>;
  }
  const generateCities = (cityList) => {
    cityList.unshift("All");
    return  <div className="my-2"><label>
              <div className="grid grid-cols-2">
                <div>
                  City:
                </div>
                <div>
                  <select className='text-black' onChange={updateCity}>
                    {cityList.map(generateOption)}
                  </select>
                </div>
              </div>
      
      

            </label></div>;
  }
  const generateStartDate = () => {
    return  <div className="my-1"><label>Start Date:<br></br>
              <ReactDayPicker key={`start-${dayKey}`} onChange={updateStartDate}/>
            </label></div>
  }
  const generateEndDate = () => {
    return  <div className="my-1"><label>End Date:<br></br>
              <ReactDayPicker key={`end-${dayKey}`} onChange={updateEndDate}/>
            </label></div>
  }
  const generateZips = (zipList) => {
    zipList.unshift("All")
    return  <div className="my-1"><label>
              <div className="grid grid-cols-2">
                <div>
                  Zipcode:
                </div>
                <div>
                  <select className='text-black' onChange={updateZip}>
                    {zipList.map(generateOption)}
                  </select>
                </div>
              </div>
      
      
              
            </label>
            </div>
  }
  //END: Generate dom elements

  //START: Update state functions
  const updateKeyword = (event) =>{
    setKeyword(event.target.value);
  }
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
  //END: Update state functions

  //Filter the input based on current search filter options, then update the current data being shown in the search
  const filterData = (data) => {
    let newData = {};
    Object.keys(data).map((key) => {
      if(isItemInFilter(data[key])){
        newData[key] = data[key];
      }
    })
    props.update(newData);
  }

  //Check if a single item matches the current filter values, returns boolean
  const isItemInFilter = (data) => {
    let kwPresent = true;
    let cityPresent = true;
    let zipPresent = true;
    let categoryPresent = true;
    let datePresent = true;
    let afterStartDate = true;
    let beforeEndDate = true;
    if(keyword != null){
      kwPresent = testKeyword(keyword.toLowerCase(),data.title.toLowerCase(),data.description.toLowerCase());
    }
    if(startDate != null){
      afterStartDate = testStartDate(data.postdate);
    }
    if(endDate != null){
      beforeEndDate = testEndDate(data.postdate);
    }
    if(city != "All"){
      cityPresent = testCity(data.city);
    }
    if(zip != "All"){
      zipPresent = testZip(data.zip);
    }
    if(category != "All"){
      categoryPresent = testCategory(data.category);
    }
    return kwPresent && cityPresent && zipPresent && categoryPresent && afterStartDate && beforeEndDate;
  }

  //START: Helper functions used to determine if filter cases match a specific field on a object
  const testKeyword = (keyword,dataTitle,dataDescription) => {
    if(dataTitle.includes(keyword) || dataDescription.includes(keyword)){
      return true;
    }
    return false;
  }
  const testStartDate = (currentDate) => {
    if(currentDate >= startDate){
      return true;
    }
    return false;
  }
  const testEndDate = (currentDate) => {
    if(currentDate <= endDate){
      return true;
    }
    return false;
  }
  const testCity = (currentCity) => {
    if(currentCity.toLowerCase() == city.toLowerCase()){
      return true;
    }
    return false;
  }
  const testZip = (currentZip) => {
    if(currentZip == zip){
      return true;
    }
    return false;
  }
  const testCategory = (currentCategory) => {
    if (currentCategory.toLowerCase() == category.toLowerCase()){
      return true;
    }
    return false;
  }
  //END: Helper functions

  //Reset the filter
  const resetFilters = () => {
    document.getElementById('filter').reset();
    setDayKey(dayKey + 1);
    setStartDate(null);
    setEndDate(null);
    setTimeout(() => { props.reset(); },250)
  }

  return (
    <div className="bg-gray-600 text-gray-200 font-semibold border border-gray-400 rounded shadow-xl mx-3 align-baseline">
      <form id="filter" className='my-2 grid-rows-8 text-center'>
        {generateKeyword()}
        {generateCategories(filterList.category)}
        {generateCities(filterList.city)}
        {generateZips(filterList.zip)}
        {generateStartDate()}
        {generateEndDate()}
      </form>
      <button onClick={resetFilters} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow my-5">Reset Filter</button>
    </div>
  )
}
