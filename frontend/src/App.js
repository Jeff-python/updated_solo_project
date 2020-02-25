import React, { useState, useEffect } from 'react';
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
import CartIcon from '../src/components/cart-icon/cart-icon.component';
import CartDropdown from '../src/components/cart-dropdown/cart-dropdown.component';
import {Buy_Cart} from '../src/components/Buy-cart';
import MewIcon from '../src/components/mew-icon/mew.component';
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


function App({}) {
  const classes = useStyles();

  const useStateWithSessionStorage = sessionStorageKey => {
    const [token, setToken] = useState(
      sessionStorage.getItem(sessionStorageKey) || '');
      return [token, setToken];
    };
  const [token, setToken] = useStateWithSessionStorage('token');
  const [cart, setCart] = useState([]);
  const [count,setCount] =useState(0)

  function addToCart(item) {
    const oldCart = [...cart];
    oldCart.push(item);
    setCart(oldCart);
    // const oldCount = Number(count)
    // oldCount ++
    // setCount(oldCount)
    console.log(oldCart)
  }

  function addToToken(key) {
    const oldToken = [...token];
    oldToken.push(key);
    setToken(oldToken);
    console.log(oldToken)
  }

  // function addToCount(){
  //   const oldCount = Number(count)
  //   oldCount ++
  //   setCount(oldCount)
  // }

  

  

  // superheroElement = React.createRef();
  // handleClick = () => {
  //   SignInAndSignUpPage.current.changeName();
  // };
  useEffect(() => {
    sessionStorage.setItem('token', token);
  }, [token])
  // let token = sessionStorage.getItem('');
  console.log(token)
  // function handleClick(){
  // let token = sessionStorage.getItem('');
  // console.log(token)}

  // if (token){
    
  //   document.getElementById('token').innerHTML = 'LOGOUT';
  // }



    return (
     
      <div className={classes.root}>
        <AppBar elevation = {0} position="static">
        <Toolbar>
        <MewIcon/>
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
         {/* <Button href ='/login' color="inherit">Login</Button> */}
        
         {
           token ? 
           <div>
           <Button href ='/login' color="inherit">Profile</Button>
           <Button id = 'token' href = '/' onClick={() => setToken('')} color="inherit">Logout</Button>
           </div>
           :
           <Button href ='/login' color="inherit">Login</Button>
           
         }
         <Link>
         <div>


         </div>
         </Link>
         
         <Button href ='/register' color="inherit">Register</Button>
         <Link to='/cart'>
         
         <CartIcon cart={cart}/> 
         </Link>
         
         {/* <CartDropdown/> */}

        </Toolbar>
        </AppBar> 
          <Switch>
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path="/">
              <Home addToCart={addToCart} />
            </Route>
{/* 
            <Route path='/login' component={SignInAndSignUpPage} /> */}
            <Route path='/login' 
            render= {(props) => <SignInAndSignUpPage {...props} 
            token={token} setToken={setToken} addToToken={addToToken}/> }/>

            {/* <Route path='/login'>
            <SignInAndSignUpPage  token ={token} setToken={setToken}/>
            </Route> */}
            <Route path='/listings' component={Listings} />
            <Route path='/add' component={Add} />
            <Route path='/register' component={Register} />
            {/* <Route path='/cart' component={Buy_Cart} /> */}
            <Route exact path="/cart">
             < Buy_Cart cart ={cart} setCart ={setCart}/>
            </Route>
         </Switch>
         </div>
         );
         }
  


export default App;
