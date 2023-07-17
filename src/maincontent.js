import React from "react"
import ReactDOM  from "react-dom"
import Image from "react-bootstrap/Image";
import { ImageProps } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import myImage from './crick.jpeg';
import   img2 from "./gym.jpeg"
import { useRef } from "react";


   const Main = () => {
       // const username = useSelector((state) => state.user.username);
  var count=0;
  const[text,setText]=useState("buy")
  const[text1,setText1]=useState("buy")
  const[text2,setText2]=useState("buy")
  const[text3,setText3]=useState("buy")
  const[text4,setText4]=useState("buy")
  const[text5,setText5]=useState("buy")
  const[text6,setText6]=useState("buy")
const click = () => {
  setText("added")
  count=count+1;}
  const click1 = () => {
    setText1("added");}
    const click2 = () => {
      setText2("added");}
      const click3 = () => {
        setText3("added");}
        const click4 = () => {
          setText4("added");}
          const click5 = () => {
            setText5("added");}
            const click6=()=>{
              setText6("added");
            }
    return ( 

    
    
    <div class="row">
    <div class="col-md-9">
      <div class="scrollable-container">
        <div id="grid">
          <div class="container"></div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3 g-md-5">
          <div class="col">
              <div class="p-3 border ">
            <div   class="card h-100" >
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">running</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click}>{text}+{count}</a>
              </div>
            </div>
              </div></div>
              <div class="col">
              <div class="p-3 border ">
            <div   class="card h-100">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={img2} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">cricket</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click1}>{text1}</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border ">
            <div   class="card h-100" >
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">football</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click2}>{text2}</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border">
            <div    class="card h-100">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">boxing</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click3}>{text3}</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border ">
            <div  class="card h-100" >
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">gym</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click4}>{text4}</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border ">
            <div   class="card h-100">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">football</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click5}>{text5}</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border" >
            <div     class="card h-100">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
              <div class="card-body">
                <h5 class="card-title">basketball</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary" onClick={click6}>{text6}</a>
              </div></div></div></div>
              <div class="col">
              <div class="p-3 border ">
              <div   class="card h-100" >
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img src={myImage} class="card-img-top" alt="running"/></a>
                <div class="card-body">
                  <h5 class="card-title">badminton</h5>
                  <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                  <a href="#" class="btn btn-primary" onClick={click}>{text1}</a>
                </div></div></div></div>
        
      </div>
    </div>
  </div>
  

);
    }


export default Main;
