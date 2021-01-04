import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class fbooking extends Component {

    
    constructor() {
        super();
        this.state = {
          name2: localStorage.getItem("name"),
          cid2: localStorage.getItem("cid"),
          pid2:localStorage.getItem("pid"),
          phoneno2:localStorage.getItem("phoneno"),
          email2:localStorage.getItem("email"),
          oid2:localStorage.getItem("oid"),
          itemname2:localStorage.getItem("itemname"),
          image2:localStorage.getItem("image"),
          fine2:localStorage.getItem("fine"),
          from:'',
          rent:'',
          to:'',
          total:'',
          is_active:'true',
        
        };    
        this.onSubmit = this.onSubmit.bind(this)
        this.create=this.create.bind(this);
        
      }
      onSubmit(e) {
        e.preventDefault()
        var diffInMs   = new Date(this.state.to) - new Date(this.state.from)
        var diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        var ans=(diffInDays*this.state.rent);
        this.setState({total: ans });
      }
      componentDidUpdate()
      {
          if(this.state.total!='')
        {
                this.create();
                fetch('http://localhost:5000/demo/book',{
          method:"Post",
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify(this.state)
             }).then((result)=>{
          
          result.json().then((res)=>{
            console.log(res); 
            if(res.message=="User registered successfully!")
            {
                swal("Successfully Booked Product!!","HAPPY SHOPPING","success")
                      .then((value) => {
                         window.location.replace("http://localhost:3000/show1   "); });
            }   
          })
       
      })
        }         
      }
      create()
      {
            
          console.log(this.state.cid2);
          console.log(this.state.pid2);
          console.log(this.state.name2);
          console.log(this.state.email2);
          console.log(this.state.phoneno2);
          console.log(this.state.from);
          console.log(this.state.rent);
          console.log(this.state.to);
          console.log(this.state.total);
          console.log(this.state.is_active);
        
          
      }
      componentWillMount() {
       
        axios.post('http://localhost:5000/demo/show2/'+this.state.pid2)
        .then(response => {
            
             //console.log(response.data.user.rent)
            this.setState({rent: response.data.user.rent});
          
        })
        .catch(error => {
          console.log(error);
        });
      }
    render() {
        return (

        <div className="wrapper" style={{backgroundImage:'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)'}}>
        
         <link rel="stylesheet" href="assets/css/dates.css"/>

          <form noValidate onSubmit={this.onSubmit} className="form">
          <label htmlFor="name" className="title" style={{color: "Black" ,textAlign:'center'}}>Select Renting Dates</label><br/>
              <label htmlFor="name" className="title">From</label>
                <input
                  type="date"
                  min={this.Date}
                  className="form-control"
                  name="from"
                  placeholder="Enter from"
                  value={this.state.from}
                  onChange={(event) => {this.setState({from: event.target.value })}}
                />
                 <label htmlFor="name" className="title">to</label>
                <input
                  type="date"
                  className="form-control"
                  name="to"
                  value={this.state.to}
                  placeholder="Enter to"
                  onChange={(event) => {this.setState({to: event.target.value })}}
                /> 
               
                <button
                type="submit"
                className="btn btn-lg btn-success btn-block"
              >
                Proceed
              </button>
                </form>
           </div>
           
        ) 
      
    }
}

export default fbooking;