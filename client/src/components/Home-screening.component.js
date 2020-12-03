import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
export default class HomeScreen extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <div style={{backgroundColor: "lightblue"}} scrollable="true">
        <h4 id="wish" style={{color: "yellow"},{textAlign: 'center'}}><b>  WEL-COME TO </b>  </h4>
        <h4 id="nameoforg"  style={{color: "yellow"},{textAlign: 'center'}} > <b> BEE CREATIVE STUDIOS </b></h4>
        <p> </p>
        <h3 id="aboutheading" style={{color: "white"}}> ABOUT</h3>
        <p style={{color: "yellow"}} >  <br></br> BEE CREATIVE STUDIOS is the Kannada Short films, Kannada Feature Films, Visual Effects Studios, Kannada Film Production House. </p>
        <p><br></br> watch this for better understanding <br></br>  </p>
       <ReactPlayer url= "https://youtu.be/zxqO87EWeNY" controls={true} width="100%" height = "100%"/>

        
      </div>
    );
  }
}
