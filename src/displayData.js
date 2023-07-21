// DisplayData.js
// import React from 'react';
import "./display.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getResponses } from "./userReducer";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { saveStateToLocalStorage,loadStateFromLocalStorage } from "./localStorage";

const DisplayData = () => {
  const [data, setData] = useState(null);
  const [FullData, setFullData] = useState(false); // Local state to track button click
  const dispatch = useDispatch();

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("reduxState"));
    setData(storedData);
    // dispatch(getResp onses(storedData)); // Dispatch the action with the stored data
  }, []);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const handleViewButtonClick = () => {
    setFullData(true); // Update local state when the "view" button is clicked
  };

  const clearLocalStr = () => {
    localStorage.clear();
    setData(null);
  };
  return (
    <>
      <div id="contentBox">
        <h2>Stored Data:</h2>
        {data?.map((response, index) => (
          <div
            class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-5"
            key={index}
          >
            <div class="p-3 border">
              <div class="card h-100">
                <div className="box">
                  <p>Sport: {response.sports}</p>
                  <p>Username: {response.username}</p>
                  <Button onClick={() => setSelectedResponse(response)}>
                    View
                  </Button>
                  {selectedResponse === response && (
                    <>
                      <p>Date: {response.date}</p>
                      <p>Members: {response.members}</p>
                      <p>Rupees: {response.rupees}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button onClick={clearLocalStr}>clear</Button>
      <Link to="/login">Login</Link>
    </>
  );
};

export default DisplayData;
