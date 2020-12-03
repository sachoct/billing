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
       <ReactPlayer url= "https://youtu.be/zxqO87EWeNY" controls={true} width="100%" height = "auto"/>

        
      </div>
    );
  }
}
