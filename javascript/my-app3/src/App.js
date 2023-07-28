import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useEffect } from "react";
import { UseFetchRemoteDATA, UsePostRemoteData, UsePutremoteData } from "./action";

const App = () => {
  const { loading, data, error } = useSelector((state) => state.data);
useEffect(()=>{
  handlePostData(data);
  handlePutData(data)
  
},[data])
  UseFetchRemoteDATA();

  const handlePostData = (data) => {
    const postData = { data};
    UsePostRemoteData(postData);
  };

  const handlePutData = (data) => {
    const dataToUpdate = { data };
    UsePutremoteData(dataToUpdate);
  };

  return (
    <div>
      {/* Your rendering code here */
      <p>{data}</p>
      
      }
    </div>
  );
};

export default App;
