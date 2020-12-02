//DisplayHello

import React, { Component } from "react";
import axios from "axios";

export default class DisplayHello extends Component {
  
    getUser(e) {
        alert("hello");
        return(

            <div> hello world</div>
        )
        // e.preventDefault();
    
        
    
        // axios
        //   .get("/users/")
        //   .then((response) =>{

        //   if (response.data.length > 0) {
        //     this.setState({
        //       users: response.data.map((user) => user.username),
        //       username: response.data[0].username,
        //     }); }}
        //   )
        


        // return "Names";
      }
  render() {
    return (
        <div class="container">
                 <h4> Hello IMAGE </h4>
<img src="https://res.cloudinary.com/sachinbisgod/image/upload/v1600597090/images_movkne.jpg"/>
<h3>{this.getUser()}</h3><br></br>
    <h3></h3>
        </div>
    
    );
  }
}
