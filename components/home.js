import React, { Component } from 'react'
//import { login } from './UserFunctions'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import swal from 'sweetalert';
import {Helmet} from 'react-helmet';
class home extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      company:'',
      email:'',
      phone:'',
      message:''
    }

    this.onSubmit = this.onSubmit.bind(this)
  }
  create()
  {
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
                  <div class="sent-message">Your message has been sent. Thank you!</div> });
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
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto"><a href="http://localhost:3000/home">Online Rental System</a></h1>
      
      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="http://localhost:3000/home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
         
          
          <li><a href="http://localhost:3000/contact">Contact</a></li>

        </ul>
      </nav>

      <a href="http://localhost:3000/login" class="get-started-btn scrollto">LOGIN/SIGNUP</a>

    </div>
  </header>
  <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1>Elegant and creative solutions</h1>
          <h2>Digitalizing Traditional Rental Process!!</h2>
          <div class="d-flex">
            <a href="http://localhost:3000/Login" class="btn-get-started scrollto">Get Started</a>
            <a href="hhttps://www.youtube.com/watch?v=4xHAyQZGvrg" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i class="icofont-play-alt-2"></i></a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img">
          <img src= "assets/img/hero-img.png" class="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>

  <main id="main">


    <section id="featured-services" class="featured-services">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon"><i class="icofont-computer"></i></div>
              <h4 class="title"><a href="">Web Application</a></h4>
              <p class="description">Experenice Digital Rental Process Through Our Website.Making Digital Platform for Traditional Things</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="icofont-image"></i></div>
              <h4 class="title"><a href="">Images</a></h4>
              <p class="description">Capturing Each and Every Moment of Happy Client</p>
              Make In India
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="icofont-tasks-alt"></i></div>
              <h4 class="title"><a href="">Book At Your Convinience</a></h4>
              <p class="description">Book Any Time Or From Anywhere From Various Variety Of Products Providing Rental Service Through Your Pocket</p>
            </div>
          </div>
        </div>

      </div>
    </section>


    <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <img src="assets/img/about.png" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 content">
            <h3>Benefits of renting with us</h3>
            <p class="font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i class="icofont-check-circled"></i> Can Put Your Things On Rent Through Your Mobile Phone</li>
              <li><i class="icofont-check-circled"></i> Can Also See and Book  Various Products From Your Pocket</li>
              <li><i class="icofont-check-circled"></i> Timing And Date Convinience</li>
            </ul>
            <p>
             Removing Traditional Rental Process Through This Digital Web-Application, Smooting Out User Experenice by deleivering This Digital Platform
            </p>
          </div>
        </div>

      </div>
    </section>

    <section id="services" class="services section-bg">
      <div class="container">

        <div class="section-title">
          <span>Services</span>
          <h2>Services</h2>
          <p>List Of Services That Our Web-Application</p>
        </div>

        <div class="row">
         

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="">No Paper Work</a></h4>
              <p>Give or Take on Rent WIthout any Requirement of Paper Work</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4><a href="">User Experenice</a></h4>
              <p>Providing Greater,Faster & Scalabel Digital Platform with help of Latest Framework</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-6">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4><a href="">Gloabally Accessible</a></h4>
              <p>Acces From Anywhere!!Services Available in all Region in India</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="cta" class="cta">
      <div class="container">

        <div class="text-center">
          <h3>Looking For Rent?</h3>
          <p> Start Putting Your Stuff On Rent And Also Experenice Rental Process Digitally  </p>
          <a class="cta-btn" href="#">Let's Go</a>
        </div>

      </div>
    </section>


    

    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <span>Contact</span>
          <h2>Contact</h2>
          <p></p>
        </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>Nr. Visat Three Roads, Sabarmati-Koba Highway, Chandkheda ,Ahmedabad.</p>
              </div>

              <div class="email">
                <i class="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>digi5technologies@gmail.com</p>
              </div>

              <div class="phone">
                <i class="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+91 9624863068</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.7310192100917!2d72.59272465075172!3d23.106940384836403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83c959d4de6f%3A0x748d0828c02cf9fa!2sVishwakarma%20Government%20Engineering%20College!5e0!3m2!1sen!2sin!4v1601106772583!5m2!1sen!2sin" frameborder="0" style={{border:'0', width:' 100%', height: '290px'}} allowfullscreen></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form onSubmit={this.onSubmit}   class="php-email-form">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" onChange={(event) => {this.setState({name: event.target.value })}} class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" onChange={(event) => {this.setState({email: event.target.value })}} class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="name">Company</label>
                  <input type="text" name="company" onChange={(event) => {this.setState({company: event.target.value })}} class="form-control" id="name" data-rule="minlen:2" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="form-group col-md-6">
                  <label for="name">Phone No</label>
                  <input type="text" onChange={(event) => {this.setState({phone: event.target.value })}} class="form-control" name="phoneno" id="email" />
                  <div class="validate"></div>
                </div>
              </div>
             
              
              <div class="form-group">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" onChange={(event) => {this.setState({message: event.target.value })}} rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    </main>
    <footer id="footer">

    <div class="footer-top">

      <div class="container">

        <div class="row  justify-content-center">
          <div class="col-lg-6">
            <h3>Online Rental System</h3>
           
          </div>
        </div>

        
        <div class="social-links">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>

      </div>
    </div>

    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>ORS</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
       
        Designed by <a href="https://bootstrapmade.com/">DIGI5TECHNOLOGIES</a>
      </div>
    </div>
  </footer>
  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

  
  

        </div>
    )
  }
}

export default home
