import React, { Component } from 'react'
//import { login } from './UserFunctions'

class Newpass extends Component {
  constructor() {
    super()
    this.state = {
      password: ''
     }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      password: this.state.password
    }

  /*  login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })*/
  }

  render() {
    
    return (
      <div className="wrapper">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"></link>  
        <link rel="stylesheet" href="assets/css/lstyle.css"/>
        <div className="row">
        <div className="col-md-10 mt-1 mx-auto">
          
            <form noValidate onSubmit={this.onSubmit} className="form">
              <h1 className="title">New Password</h1>
              
              <div className="input_field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Newpass
