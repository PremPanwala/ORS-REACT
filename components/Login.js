import React, { Component } from 'react'
//import { login } from './UserFunctions'
import swal from 'sweetalert';
import Navbar from './Navbar';
import {Helmet} from 'react-helmet';
//import './css/styles.css';
class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
     }

   // this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /*onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }*/


  create()
  {
      //console.log(this.state);
      fetch('http://localhost:5000/demo/login',{
          method:"Post",
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(this.state)
      }).then((result)=>{
          
          result.json().then((res)=>{
            console.log(res);
            //console.log(res.data.password);
            
            //console.log(res.data.email);
            
            //localStorage.setItem("login", (res.data.username));
            
              if(res.is_error==false)
              {
                console.log(res.data._id)
                localStorage.setItem("myid",res.data._id)
                localStorage.setItem("login", (res.data.email))
                swal("Successfully Logged In!!","Welcome Back","success")
                      .then((value) => {
                         window.location.replace("http://localhost:3000/dupload"); });
              }
              else{
                swal("CHECK YOUR EMAIL OR PASSWORD!!","INVALID EMAIL OR PASSWORD","warning")
                      .then((value) => {
                         window.location.replace("http://localhost:3000/Login"); });
              }
            //  console.log(res);
                  
          })
       
      })     
  }
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
              <div className="title">Login</div>
              <div className="input_field">
              <label htmlFor="name">EMAIL ADRESS</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Enter email"
                  onChange={(event) => {this.setState({email: event.target.value })}}
                /><i class="fas fa-envelope"></i>
              </div>
              <div className="input_field">
              <label htmlFor="name">PASSWORD</label>
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
                Sign in
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

export default Login
