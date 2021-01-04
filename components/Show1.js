import React, { Component } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';
var divStyle = {
  width:"40px"
};
// function sayHello(name) {
//   alert(`hello, ${name}`);
//    pid=`${name}`;   
// }

class Show1 extends Component {
  constructor(props) {
    super(props);
    var nam=null,or;
    if(localStorage.getItem("login"))
    {
      nam=localStorage.getItem("login");
      or=localStorage.getItem("or");

    }
  this.state={
    oname:nam,
    lists:[],
    cid:'',
    pid:'',
    oid:'',
    name:'',
    email:'',
    phoneno:'',
    itemname:'',
    image:'',
    fine:'',
    
  };
  this.create();
}
      componentDidMount() {
       
        axios.post('http://localhost:5000/demo/show')
        .then(response => {
            this.setState({ lists: response.data.Users })
            console.log(this.state.lists)
          
        })
        .catch(error => {
          console.log(error);
        });
      }
     
     sayHello(name,oid,itemname,image,fine) {
    //  alert(`hello, ${oid}`);
     this.state.oid=`${oid}`;
      this.state.pid=`${name}`;
      this.state.itemname=`${itemname}`;
      this.state.image=`${image}`;
      this.state.fine=`${fine}`;
      this.disp();
        
    }
    disp()
    {
      console.log(this.state.cid);
      console.log(this.state.pid);
      console.log(this.state.name);
      console.log(this.state.phoneno);
      console.log(this.state.email);
      localStorage.setItem("cid", (this.state.cid))
      localStorage.setItem("pid", (this.state.pid))
      localStorage.setItem("name", (this.state.name))
      localStorage.setItem("phoneno", (this.state.phoneno))
      localStorage.setItem("email", (this.state.email))
      localStorage.setItem("oid", (this.state.oid))
      localStorage.setItem("itemname", (this.state.itemname))
      localStorage.setItem("image", (this.state.image))
      localStorage.setItem("fine", (this.state.fine))
      window.location.replace("http://localhost:3000/fbooking"); 
    }

  create(){
    console.log("hi bro"+this.state.oname);
    axios.post('http://localhost:5000/demo/show1/'+this.state.oname)
    .then(response => {
        console.log(response);
        console.log(response.data.Users._id);
        console.log(this.state.pid);
        this.setState({cid: response.data.Users._id});
        this.setState({name: response.data.Users.username});
        this.setState({email: response.data.Users.email});
        this.setState({phoneno: response.data.Users.phoneno});
        
        
    })
    .catch(error => {
      console.log(error);
    });
  }
    render() {
        
        return (
         
            <div className="container">
              
         <link rel="stylesheet" href="assets/css/rentShow.css"/>

            <div className="col-xs-7">
            {this.state.lists.map((details) => (
              <Card style={{width: '20rem', display: 'inline-block', padding:'20px', margin:'20px', backgroundImage:'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%'}}>
                
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={details.image}  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" >
                    {details.itemname}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                  {details.itemdetail}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                  {details.rent}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" >
                  {details.fine}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button  size="large"  color="primary" onClick={() => this.sayHello(details._id,details.oid,details.itemname,details.image,details.fine)} style={{fontFamily:"Verdana"}}  >
                  Book Now
                </Button>
                
              </CardActions>
            </Card>
            ))}
            </div>
           

           </div>
           


        )
      
    }
}

export default Show1;