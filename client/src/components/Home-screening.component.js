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
        <h4 id="wish" style={{color: "darkblue"},{textAlign: 'center'}}><b>  WEL-COME TO </b>  </h4>
        <h4 id="nameoforg"  style={{color: "yellow"},{textAlign: 'center'}} > <b> BEE CREATIVE STUDIOS </b></h4>
        <p> </p>
        <h3 id="aboutheading" style={{color: "darkmagenta"}}> ABOUT</h3>
        <p style={{color: "black"}} >  <br></br> BEE CREATIVE STUDIOS is the Kannada Short films, Kannada Feature Films, Visual Effects Studios, Kannada Film Production House. </p>
        <p style={{color: "red"}}><br></br> watch this for better understanding <br></br>  </p>
       <ReactPlayer url= "https://youtu.be/zxqO87EWeNY" controls={true} width="100%" height = "280px"/>

        
      </div>
    );
  }
}
