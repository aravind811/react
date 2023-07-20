// DisplayData.js
// import React from 'react';
import './display.css'
import { useSelector , useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { getResponses } from './userReducer';
import { useEffect, useState } from 'react';
import counterReducer from './userReducer';

const DisplayData = () => {

  let responses = useSelector((state) => state.user.responses);
const [data,setData] = useState('')
  console.log(responses,'whatresponses')
 let dispatch=useDispatch();
useEffect(()=>{
  let storedData=JSON.parse(localStorage.getItem('reduxState'))
  setData(storedData)
  console.log(storedData,'whatthisdata')
  dispatch(getResponses([(storedData)]));
},[])

  return (
    <><div  id='contentBox'>
          <h2>Stored Data:</h2>
          {responses?.map((response, index) => (
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-5">
          <div class="p-3 border ">
          <div   class="card h-100" >
          <div className='box'key={index}>
                  <p>Sport: {response.sports}</p>
                  <p>Username: {response.username}</p>
                  <p>Date: {response.date}</p>
                  <p>Members: {response.members}</p>
                  <p>rupees:{response.rupees}</p>
              </div>
          </div></div></div>
          
          ))}

      </div><Link to="/login">Login</Link></> );
};

export default DisplayData;
