import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class mybooking extends Component {

    
    constructor() {
        super();
        this.state = {
          oid2:localStorage.getItem("myid"),
          lists: [],
          to:'',
          fine:1,
          total:1,
          _id:'',
          email:'',
          ffrom:'',
          bill:1,
          name:'',
          phoneno:'',
          from:'',
          itemname:'',
        };    
        this.onSubmit = this.onSubmit.bind(this)
      }
      onSubmit(e) {
        e.preventDefault()
      }
     
               
      
      
      componentWillMount() {
       
        axios.post('http://localhost:5000/demo/mybook/'+this.state.oid2)
        .then(response => {
            
             console.log(response.data)
             this.setState({ lists: response.data.Users })

            //this.setState({rent: response.data.user.rent});
          
        })
        .catch(error => {
          console.log(error);
        });
      }
      sayHello(fine,to,total,_id,email,name,phoneno,from,itemname) {
        
        alert(`hello, ${to}`);
        this.state.to=`${to}`;
        this.state.fine=`${fine}`;
        this.state.total=`${total}`;
        this.state._id=`${_id}`;
        this.state.name=`${name}`;
        this.state.email=`${email}`;
        this.state.phoneno=`${phoneno}`;
        this.state.ffrom=`${from}`;
        this.state.itemname=`${itemname}`;
        console.log(this.state.ffrom);
        alert(`${email}`);
        var tempDate = new Date();
        var date = tempDate.getFullYear()+"-" + (tempDate.getMonth()+1) +"-"+ tempDate.getDate();
        const currDate = date;
        this.state.from=currDate;
        console.log(currDate);
        console.log(this.state.to);
        var diffInMs   = new Date(this.state.from) - new Date(this.state.to)
        var diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        console.log(Math.round(diffInDays));
        var now = new Date;
        var target = new Date(this.state.to);
    
        if ( now.getFullYear()>target.getFullYear() ) 
        {
            console.log("AFTER YEAR");
            let fi=(Math.round(diffInDays)*this.state.fine);
            this.state.fine=parseInt((Math.round(diffInDays)*this.state.fine));
            console.log(this.state.fine);
            console.log(+this.state.total+ +this.state.fine);
            let ans=+this.state.total+ +this.state.fine;
            this.state.bill=ans;
            swal("LATE RETRURNED PRODUCT!!!","FINE: "+ans,"warning")
            .then((value) => {
              fetch('http://localhost:5000/demo/change/',{
                method:"Post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }).then((result)=>{
              window.location.replace("http://localhost:3000/mybooking");
            })
    })
    .catch(error => {
      console.log(error);
    });
              
        }
        else if(target.getFullYear() == now.getFullYear()) 
        {
        if (now.getMonth()>target.getMonth()) {
            console.log("AFTER MONTH");
            var fi=(Math.round(diffInDays)*this.state.fine);
            this.state.fine=parseInt((Math.round(diffInDays)*this.state.fine));
            console.log(this.state.fine);
            console.log(+this.state.total+ +this.state.fine);
            let ans=+this.state.total+ +this.state.fine;
            this.state.bill=ans;
            swal("LATE RETRURNED PRODUCT!!!!","FINE: "+ ans,"warning")
            .then((value) => {
              fetch('http://localhost:5000/demo/change/',{
                method:"Post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }).then((result)=>{
              window.location.replace("http://localhost:3000/mybooking");
            })
    })
    .catch(error => {
      console.log(error);
    });
        } 
        else if(target.getMonth() == now.getMonth())
        {
        if ( now.getDate()>target.getDate() ) {
            console.log("AFTER DAYS");
            var fi=(Math.round(diffInDays)*this.state.fine);
            this.state.fine=parseInt((Math.round(diffInDays)*this.state.fine));
            console.log(this.state.fine);
            console.log(+this.state.total+ +this.state.fine);
            let ans=+this.state.total+ +this.state.fine;
            this.state.bill=ans;
            swal("LATE RETURNED PRODUCT!!!!","FINE: "+ ans,"warning")
            .then((value) => {
              fetch('http://localhost:5000/demo/change/',{
                method:"Post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }).then((result)=>{
              
              window.location.replace("http://localhost:3000/mybooking");
            })
            
    })
    .catch(error => {
      console.log(error);
    });
        }
        else
        {
          this.state.bill=this.state.total;
            console.log("DATE IS OK");
            swal("ON TIME RETURNED PRODUCT!!!!","TOTAL: "+this.state.total,"success")
            .then((value) => {
              fetch('http://localhost:5000/demo/change/',{
                method:"Post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(this.state)
            }).then((result)=>{
              window.location.replace("http://localhost:3000/mybooking");
             
            })
            
      })
           
              
        }
        }
    
    
        }
    
       else{
        return false;
        }
          
      }
    render() {
        return (
           <div className="container">
                      <link rel="stylesheet" href="assets/css/rentShow.css"/>
          <div className="col-xs-2">
          {this.state.lists.map((details) => (
              <Card style={{ width: '20rem', display: 'inline-block', padding:'20px', margin:'20px',backgroundImage:'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)'}}>
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
                  <Typography variant="body2" color="textSecondary" component="p">

     </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {details.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {details.phoneno}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {details.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {details.total}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {details.fine}</Typography>
                </CardContent>
                
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => this.sayHello(details.fine,details.to,details.total,details._id,details.email,details.name,details.phoneno,details.from,details.itemname)}  >
                  ACCEPT RETURN
                </Button>
                
              </CardActions>
            </Card>
            ))}
              </div>
               
            </div>
           
        ) 
      
    }
}

export default mybooking;