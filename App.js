import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Forget from  './components/Forget'
import Newpass  from './components/Newpass'
import upload from './components/upload'
import show from './components/show'
import contact from './components/Contact'
import dupload from './components/dupload'
import home from './components/home'
import show1 from './components/Show1'
import fbooking from './components/fbooking'
import mybooking from './components/mybooking'
import  History from './components/History'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={home}  />
        <Route exact path="/mybooking" component={mybooking}  />
        <Route exact path="/show1" component={show1}  />
            <Route exact path="/register" component={Register}  />
            <Route exact path="/fbooking" component={fbooking}  />
            <Route exact path="/login" component={Login} />
            <Route exact path="/History" component={History} />
            <Route exact path="/forget" component={Forget} />
            <Route exact path="/Newpass" component={Newpass} />
            <Route exact path="/contact" component={contact} />
            <Route exact path="/upload" component={upload} />
            <Route exact path="/show" component={show} />
            <Route exact path="/dupload" component={dupload} />
            <Route exact path="/home" component={home} />     
        </div>
        
      </Router>
     
    )
  }
}

export default App
