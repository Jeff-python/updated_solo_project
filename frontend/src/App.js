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

// componentWillUpdate();{

//   localStorage.setItem(cart,cart);
// };

function App({}) {
  const classes = useStyles();

  const useStateWithSessionStorage = sessionStorageKey => {
    const [token, setToken] = useState(
      sessionStorage.getItem(sessionStorageKey) || '');
      return [token, setToken];
    };
  const [token, setToken] = useStateWithSessionStorage('token');
  const [cart, setCart] = useState([]);
  const [cartList, setCartList] =useState([])
  const [count,setCount] = useState([]);
  const [id,setId] = useState([]);
  const [oldCartList] =[]
 


  
  
 
  function addToCart(item) {
    const oldCart = [...cart];
    const oldCount = [...count];
    const oldId =[];
    const oldCartList = [...cartList];
    
    
    oldCount.push(item[0]);
    setCount(oldCount);
    
    if (count.includes(item[0])){
      //  cart.includes(item[0]);
      //  item[6]=0
       (item[6]++);
       oldId.push(item[0]);
       setId(oldId);
    
    // if (wCount.includes(item[0])) {
    //   item[6]++;
    // console.log(oldCount)
    

    }
    else{
    cart.push(item[0]);
    // setCart(oldCart);
    oldId.push(item[0]);
    oldCartList.push(item);
    setCartList(oldCartList)
    setId(oldId);
    // const oldCount = Number(count)
    // oldCount ++
    // setCount(oldCount)
    // console.log('oldcart',oldCart)
    console.log('cartList',cartList)
    // console.log(item[0])
    // console.log('cart',cart)
    // console.log(cart[0])
    
    
  }
  sessionStorage.setItem(`${oldId}`,`${item}`)
  console.log(oldId)
  
  // console.log((window.sessionStorage.getItem('1')))
  console.log(Object.keys(sessionStorage));
  
  

    
  const wCount = [window.sessionStorage.item]






}


 

  function addToToken(key) {
    const oldToken = [...token];
    oldToken.push(key);
    setToken(oldToken);
    // console.log(oldToken)
  }

  function removeItem(item) {
    const oldCart = [...cart];
    console.log(oldCart)
    oldCart.splice(item,1);
    setCart(oldCart);
    console.log(cart)
    // const newData = {
    //   "pk": data[item][0]
    }



  // useEffect(() => {
  //   sessionStorage.setItem('token', token);
  // }, [cart])

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
  // console.log(token)
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
        
         {/* <Link to ='/' color="inherit"><Typography>Home</Typography></Link> */}
         
         <Link style={{ textDecoration: 'none', color: 'white' }} to ='/'>
          <Button color="inherit">Home</Button>
         </Link>

  
        
        
         {
           token ? 
           <div>
           <Link style={{ textDecoration: 'none', color: 'white' }} to ='/login'>
           <Button  color="inherit">Profile</Button>
           </Link>
           <Button id = 'token' href = '/' onClick={() => setToken('')} color="inherit">Logout</Button>
           </div>
           :
           <Link style={{ textDecoration: 'none', color: 'white' }} to ='/login'>
           <Button href ='/login' color="inherit">Login</Button>
           </Link>
           
         }
         
         <Link style={{ textDecoration: 'none', color: 'white' }} to ='/register'>
         <Button href ='/register' color="inherit">Register</Button>
         </Link>
         <Link style={{ textDecoration: 'none', color: 'white' }} to='/cart'>
         
         <CartIcon count={count}/> 
         </Link>
         
         {/* <CartDropdown/> */}

        </Toolbar>
        </AppBar> 
          <Switch>
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path="/">
              <Home addToCart={addToCart}/>
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
             < Buy_Cart cartList={cartList} cart ={cart} setCart ={setCart} removeItem={removeItem}/>
            </Route>
         </Switch>
         </div>
         );
         }
  


export default App;
