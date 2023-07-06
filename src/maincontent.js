import React from "react"
import ReactDOM  from "react-dom"
import { Image } from 'react-bootstrap';
const Main = () => {
    return ( <div class="row">
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
            <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">running</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div>
            </div>
              </div></div>
              <div class="col">
              <div class="p-3 border ">
            <div   class="card h-100">
              <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">cricket</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border ">
            <div   class="card h-100" >
            <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">football</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border">
            <div    class="card h-100">
            <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">boxing</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border ">
            <div  class="card h-100" >
            <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">gym</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border ">
            <div   class="card h-100">
            <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">football</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div>
            </div></div></div>
            <div class="col">
            <div class="p-3 border" >
            <div     class="card h-100">
            <Image src="crick.jpeg" class="card-img-top" alt="running"/>
              <div class="card-body">
                <h5 class="card-title">basketball</h5>
                <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                <a href="#" class="btn btn-primary">buy now</a>
              </div></div></div></div>
              <div class="col">
              <div class="p-3 border ">
              <div   class="card h-100" >
              <Image  srcSet="crick.jpeg" class="card-img-top" alt="running"/>
                <div class="card-body">
                  <h5 class="card-title">badminton</h5>
                  <p class="card-text">"READY","SET","GO". gear up for daily run</p>
                  <a href="#" class="btn btn-primary">buy now</a>
                </div></div></div></div>
        
      </div>
    </div>
  </div>

);
}
 
export default Main;
