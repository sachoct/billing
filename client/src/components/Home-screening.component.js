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
        <h4 id="wish" style={{color: "gold",textAlign: 'center'}}><b>  WEL-COME TO </b>  </h4>
        <h4 id="nameoforg"  style={{color: "gold",textAlign: 'center'}} > <b> BEE CREATIVE STUDIOS </b></h4>
        <p style={{color: "white"}} >  <br></br> Kannada Short films, Kannada Feature Films, Visual Effects Studios, Kannada Film Production House. </p>
        </div>
        <h3 id="aboutheading" style={{color: "darkmagenta"}}>Introduction</h3>
       <p>We are very excite to share some info about us in following video ,please do watch</p> 
       
       <ReactPlayer url= "https://youtu.be/zxqO87EWeNY" controls={true} width="100%" height = "280px"/>

       <br></br>
       <h3 id="aboutheading" style={{color: "darkmagenta"}}>Contact Us</h3>

       <p  style={{backgroundColor: "brown"}}>Contact Us For Film Editing, Visual Effects, Poster Designs, Motion Graphics and Film Making Solutions With Collabarations.</p>
<p style={{backgroundColor: "green"}}><br></br><b>Contact Info : beecreativestudios2020@gmail.com</b></p>
       <a href="https://www.instagram.com/bee_creativestudios/?fbclid=IwAR15Hjbbh3dRjzrO5tkib9TNIcXkrLp6Hm-sL-_2diNLIqeCe5XQkl38vhQ" ><img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1607019738/downloads_tmkaqd.jpg" height="40px" width="40px"></img></a>
       <br></br>
       <a href="https://www.facebook.com/beecreativevfx"><img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1607019738/download_xf3q0k.png" height="40px" width="40px"></img></a>
       <br></br>
      

        
      </div>
    );
  }
}
