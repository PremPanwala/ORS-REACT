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
class History extends Component {
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
    ownerid:or,
    
  };
}
      componentDidMount() {
          console.log(this.state.ownerid);
       
        axios.post('http://localhost:5000/demo/history/'+this.state.ownerid)
        .then(response => {
            this.setState({ lists: response.data.Users })
            console.log(this.state.lists)
          
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
              {details.total}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
              {details.fine}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
              {details.from}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
              {details.to}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        ))}
        </div>
       

       </div>
       


    )
      
    }
}

export default History;