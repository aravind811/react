import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDataStart, fetchDataFailure, fetchDataSuccess } from "./createSlice";
import { fetchData, postData, updateData } from "./api";
import { InputGroup,Form } from "react-bootstrap";
export const UseFetchRemoteDATA = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchData());
      fetchData(    )
        .then((data) => {
          dispatch(fetchDataSuccess(data));
        })
        .catch((error) => {
          dispatch(fetchDataFailure(error));
        });
    }, [dispatch]);
  };
  export const UsePostRemoteData = (data) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      postData(data).then((response) => {
          dispatch(fetchDataSuccess(response))
        console.log("responseData", response);
      })
      .catch((error) => {
          dispatch(fetchDataFailure(error));
      })
      
    }, [data, dispatch]);
  };
  
  export const UsePutremoteData = (data) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      updateData(data).then((response) => {
          dispatch(fetchDataSuccess(response))
        console.log("updated data", response);
      })
      .catch((error)=>{
          dispatch(fetchDataFailure(error))
      })
    }, [data, dispatch]);}
  
function sumbit(){
const [data,setdata]=useState("");
const handleDatachange=(e)=>{
    setdata(e.target.value)

}
const handleSubmit = (e) => {
    e.preventDefault();
  
    const newResponse = {
     data
    };
   
     dispatch(fetchDataSuccess(newResponse));
    
  };
return(
    <div >
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className='form'>
      <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
  <Form.Control 
  className='input'
  value={data}
  onChange={handleDatachange}
    style={{ width: "50%" }} // Adjust the width here as per your preference
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
    
  /></InputGroup>
      </form>
      </div>

)
;}
