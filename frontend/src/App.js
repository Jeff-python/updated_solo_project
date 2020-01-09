import React from 'react';
// BrowserRouter as Router
import { Link, Switch, Route } from 'react-router-dom';
// import { CardList } from './components/card-list/card-list.component';
// import {SearchBox} from './components/search-box/search-box.component';
import Listings from './components/Listings';
// import {SearchZip} from './components/search-zip/search-zip.component';
import Home from './components/Home/Home';
import sendData from './components/Home/Home';
import Add from './components/Add';
import Register from './components/Register';
import './App.css';
import './Button.css';
import SignInAndSignUpPage from './components/login/login';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
// import CardMedia from '@material-ui/core/CardMedia';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';

// import {ButtonList} from './components/Button-list/Button-list.component';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 20,
    width: 20,
    justify:"center",
    // marginCenter:theme.spacing(6),
    // spacing: 8,
  },
}));


function App() {
  const classes = useStyles();

    return (
     
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
           ABC MARKET
        </Typography>
{/* 
        <Card className={classes.card}> */}
      {/* <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="40"
          width = "40"
          image="/Users/jeffreyzheng/byte_academy/phase2/p4_0/frontend/public/resize_pictures/picture1.png"
          title="Contemplative Reptile"
        />
        </CardActionArea>
        </Card> */}



{/* 
        <Card>
        <CardActionArea>
        <CardMedia  className={classes.media} 
                    image = "Users/jeffreyzheng/byte_academy/phase2/p4_0/frontend/src/panda.png"/> 
        </CardActionArea>
        </Card> */}
         <Button href ='/' color="inherit">Home</Button>
         <Button href ='/login' color="inherit">Login</Button>
         <Button href ='/register' color="inherit">Register</Button>
        </Toolbar>
        </AppBar> 
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component ={SignInAndSignUpPage}/>
            <Route path='/listings' component={Listings} />
            <Route path='/add' component={Add} />>
            <Route path='/register' component={Register} />>

         </Switch>
         </div>
         );
         }
  


export default App;
