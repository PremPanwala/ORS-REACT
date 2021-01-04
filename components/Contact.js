import React, { Component } from 'react'
//import { login } from './UserFunctions'
import swal from 'sweetalert';
import {Helmet} from 'react-helmet';
class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      company:'',
      email:'',
      phone:'',
      message:''
     }

   // this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

 
  create()
  {
      //http://localhost:5000/demo/send
     
      fetch('http://localhost:5000/demo/send',{
          method:"Post",
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(this.state)
      }).then((result)=>{
          
          result.json().then((res)=>{
              console.log(res);
              if(res===true)
              {
              
                swal("Details Sent!!","Thank You For Contacting Us!! We Soon  Will be Contacting You ","success")
                .then((value) => {
                   window.location.replace("http://localhost:3000/Login"); });
              }
              else{            
               swal("Server Interruption!!","Please Try Again After Some Time","warning")
                  .then((value) => {
                     window.location.replace("http://localhost:3000/Contact");
                  });
            
               }
              
              
                
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
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
  <title>Online Rental System</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="assets/css/main.css"/>
</head>
<body>
  <div class="container">
    <h1 class="brand"><span>Contact</span> Us</h1>
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3>Online Rental System</h3>
        <ul>
          <li><i class="fa fa-road"></i> Nr. Visat Three Roads, Sabarmati-Koba Highway, Chandkheda ,Ahmedabad.</li>
          <li><i class="fa fa-phone"></i> +91 9624863068</li>
          <li><i class="fa fa-envelope"></i>digi5technologies@gmail.com</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Email Us</h3>
        
        <form onSubmit={this.onSubmit}>
          <p>
            <label>Name</label>
            <input type="text" name="name"  onChange={(event) => {this.setState({name: event.target.value })}}/>
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company"  onChange={(event) => {this.setState({company: event.target.value })}}/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email"  onChange={(event) => {this.setState({email: event.target.value })}}/>
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone"  onChange={(event) => {this.setState({phone: event.target.value })}}/>
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5"  onChange={(event) => {this.setState({message: event.target.value })}}></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</body>

      </div>

    )
  }
}

export default Contact
