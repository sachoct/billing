//DisplayHello

import React, { Component } from "react";
import axios from "axios";

export default class DisplayHello extends Component {

    constructor() {
        super()
        this.state = {
         
     people:[],
          
          errors: {}
        }
      }
  
    getUser(e) {
        alert("hello");
        axios.get('/displayusers').then(res=> {
alert(res.data.map(names=>names.username));

if (res) {
    // localStorage.setItem('added-items', JSON.stringify(res));
     //alert( localStorage.getItem('added-items'));
     this.setState({
people:res
     });
   }

            
        });
        return(

            <div> USER NAMES
                <div>

<h2>           {this.state.people.map(person =>(
           
 
 <h4>  {person.username} </h4>

 

          ))}      </h2>

                </div>
                
                  </div>

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
<h3>{this.getUser()}</h3>  


<table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
    
   <td>Name</td>
   
   </tr>
   {this.state.people.map(person =>(
            <tr>
 
 <td> {person.username} </td>


</tr>
          ))}
              
             
            </tbody>
          </table>


        </div>
    
    );
  }
}
