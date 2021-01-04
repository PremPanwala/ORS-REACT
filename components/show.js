import React, { Component } from 'react';
import axios from 'axios';


class show extends Component {


 

    state = {
        lists: []
      }
      componentDidMount() {
        
        axios.post('http://localhost:5000/demo/show')
        .then(response => {
            console.log(response);
            this.setState({ lists: response.data.Users })
            //console.log(this.state.lists)
          
        })
        .catch(error => {
          console.log(error);
        });
      }
    
      
      
    
    

    render() {
        return (
            <div className="container">
            
            <div className="col-xs-2">
            {this.state.lists.map((details) => (
              <div className="card">
                <div className="card-body">
                <a target="_blank" href={details.image}>
                  <img src = {details.image}   width="150px" height="150px"/>
                  </a>
                <div>{details.username}</div>
                <div> <label >       {details.email}</label></div>
                <div> <label >{details.phoneno}</label></div>
                <div> <label >{details.itemname}</label></div>
                <div> <label >{details.itemdetail}</label></div>
                </div>
              </div>
            ))}
            </div>
           </div>
           
        ) 
      
    }
}

export default show;