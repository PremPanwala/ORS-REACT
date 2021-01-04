import React, { Component } from 'react'
//import { register } from './UserFunctions'
import swal from 'sweetalert';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';
//import './css/styles.css';
class Register extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      password:'',
      email:'',
      phoneno:''
    }


    //http://localhost:5000/demo/register
   // this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  create()
  {
      console.log(this.state);
      fetch('http://localhost:5000/demo/register',{
          method:"Post",
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(this.state)
      }).then((result)=>{
          
          result.json().then((res)=>{
              console.log(res);
              if(res.driver==true)
              {
              
                swal("REGISTERED USER!!","YOU MIGHT HAVE ACCOUNT WITH US!! PLEASE TRY TO LOGIN","warning")
                .then((value) => {
                   window.location.replace("http://localhost:3000/Login"); });
              }
              else{
              //  alert("WELCOME TO OUR FAMILY!!")  
            
               swal("SIGN UP!!","PLEASE OK TO CONTINUE","success")
                  .then((value) => {
                     window.location.replace("http://localhost:3000/Login");
                  });
            
               }
              
              
                
          })
       
      })     
  }
  

  /*onChange(e) {
    this.setState({ [e.target.name]: e.target.value,})
  }*/
  onSubmit(e) {
    e.preventDefault()
    console.log(this.state);
    this.create();

  }

  render() {
    return (
      
      <div>
      <Navbar/>
      <link rel="stylesheet" href="assets/css/lstyle.css"/>
      <div className="wrapper">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>  
        <div className="row">
          <div className="col-md-10 mt-9 mx-auto">
          <div class=" animated bounceInDown">
            <form noValidate onSubmit={this.onSubmit} className="form">
              <div className="title">Register yourself</div>
              <div className="input_field">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="input"
                  name="username"
                  placeholder="Enter your first name"
                  onChange={(event) => {this.setState({username: event.target.value })}}
                /><i class="fas fa-user"></i>
              </div>
              <div className="input_field">
                <label htmlFor="name">Phone NO</label>
                <input
                  type="text"
                  className="input"
                  name="phoneno"
                  placeholder="Enter your Phone No."
                  onChange={(event) => {this.setState({phoneno: event.target.value })}}
                /><i class="fas fa-phone"></i>
              </div>
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
              <div className="input_field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  onChange={(event) => {this.setState({password: event.target.value })}}
                /><i class="fas fa-lock"></i>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-success btn-block"
              >
                Register!
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

export default Register
