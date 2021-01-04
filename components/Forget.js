import React, { Component } from 'react'
//import { login } from './UserFunctions'
import swal from 'sweetalert';
import {Helmet} from 'react-helmet';
import Navbar from './Navbar';
//import './css/styles.css';
class Forget extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      
     }

   
    this.onSubmit = this.onSubmit.bind(this)
  }
  create()
  {
      console.log(this.state);
      fetch('http://localhost:5000/demo/forgot_pass',{
          method:"Post",
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(this.state)
      }).then((result)=>{
          
          result.json().then((res)=>{
            console.log(res);
            if(res.is_error==false)
            {
            
            swal("Password Sent!!","PLEASE OK TO CONTINUE","success")
                  .then((value) => {
                     window.location.replace("http://localhost:3000/Login"); });
            }
           else
            {
            swal("Forgot Password Failed!!","PLEASE TRY AGAIN","warning")
                    .then((value) => {
                         window.location.replace("http://localhost:3000/Forget"); });
            }

          })
        
       
      })     
  }
  onSubmit(e) {
    e.preventDefault()
    swal({
      title: "Are you sure?",
      text: "Updated Password Will be sent to Your Registered E-mail Address!",
      icon: "warning",
      dangerMode: true,
      buttons: {
        cancel: "CANCEL",
        catch: {
          text: "SUBMIT",
          value: "catch",
        },
       
      },
    })    
    .then((value) => {
      switch (value) {
        case "catch":
          this.create();
          break;
     
        default:
          swal("Password Not Updated!");
      }
    });
        
    
    
   }

  render() {
    return (
      <div>
      <Navbar />
      <link rel="stylesheet" href="assets/css/lstyle.css"/>
      <div className="wrapper">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>  
        <div className="row">
          <div className="col-md-10 mt-1 mx-auto">
          <div class=" animated bounceInDown">
            <form noValidate onSubmit={this.onSubmit} className="form">
              <div className="title">Forget Password</div>
              <div className="input_field">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  
                  placeholder="Enter email"
                 
                  onChange={(event) => {this.setState({email: event.target.value })}}
                /><i class="fas fa-envelope"></i>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-success btn-block"
>
                Change Password
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Forget
