import React, { Component } from 'react';
import axios from 'axios';
 
export default class FileUploadComponent extends Component {
 
  constructor(props) {
    super(props);
 
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
    this.state = {
      email:'',
      username:'',
      phoneno:'',
      itemname:'',
      itemdetail:'',
      rent:'',
      fine:'',
      bname:'-',
      bemail:'-',
      bphoneno:'-',
      startdate:'-',
      enddate:'-',
        image: ''
    }
  }
 
  onFileChange(e) {
    
    this.setState({ image: e.target.files[0] })
    
      
  }
 
  onSubmit(e) {
      e.preventDefault()
      const formData = new FormData()
      formData.append('image', this.state.image)
      formData.append('username',this.state.username);
      formData.append('email',this.state.email);
      formData.append('phoneno',this.state.phoneno);
      formData.append('itemname',this.state.itemname);
      formData.append('itemdetail',this.state.itemdetail);
      formData.append('rent',this.state.rent);
      formData.append('fine',this.state.fine);
      console.log(formData);
      axios.post("http://localhost:5000/demo/user-profile", formData, {
      }).then(res => {
          console.log(res)
      })
  }


 
  render() {
    return (
      <div className="container">
        <h3>React File Upload</h3>
        <hr/>
        <div className="row" style={{marginTop:'40px'}}>
        <div className="col-md-4 offset-md-4">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
                <label htmlFor="name">User name</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter your User name"
                  onChange={(event) => {this.setState({username: event.target.value })}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={(event) => {this.setState({email: event.target.value })}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Phone NO</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneno"
                  placeholder="Enter your PHONENO"
                  onChange={(event) => {this.setState({phoneno: event.target.value })}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemname">Item Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneno"
                  placeholder="EnterItem Name"
                  onChange={(event) => {this.setState({itemname: event.target.value })}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="itemdetail">Item Details</label>
              <textarea name="itemdetail" rows="5" cols="45"  onChange={(event) => {this.setState({itemdetail: event.target.value })}}></textarea>
              </div>
            <div className="form-group">
                <input type="file" onChange={this.onFileChange} />
            </div>
            <div className="form-group">
                <label htmlFor="rent">Rent</label>
                <input
                  type="text"
                  className="form-control"
                  name="rent"
                  placeholder="Enter Item Rent"
                  onChange={(event) => {this.setState({rent: event.target.value })}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fine">Fine</label>
                <input
                  type="text"
                  className="form-control"
                  name="fine"
                  placeholder="Enter Item fine"
                  onChange={(event) => {this.setState({fine: event.target.value })}}
                />
              </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">Upload</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  }
}