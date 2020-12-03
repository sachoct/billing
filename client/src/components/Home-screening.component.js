import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
export default class HomeScreen extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <div>
        <div style={{backgroundColor: "indigo"}}>
        <h4 id="wish" style={{color: "gold"},{textAlign: 'center'}}><b>  WEL-COME TO </b>  </h4>
        <h4 id="nameoforg"  style={{color: "gold",textAlign: 'center'}} > <b> BEE CREATIVE STUDIOS </b></h4>
        <p style={{color: "white"}} >  <br></br> Kannada Short films, Kannada Feature Films, Visual Effects Studios, Kannada Film Production House. </p>
        </div>
        <h3 id="aboutheading" style={{color: "darkmagenta"}}> ABOUT</h3>
       
        <p style={{color: "red"}}><br></br> watch this for better understanding <br></br>  </p>
       <ReactPlayer url= "https://youtu.be/zxqO87EWeNY" controls={true} width="100%" height = "280px"/>

        
      </div>
    );
  }
}
