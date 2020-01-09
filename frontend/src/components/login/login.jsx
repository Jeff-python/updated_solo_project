
import { Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Add  from '../Add';
import Listings from '../Listings';
import Header from '../Header';

import './login.style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      // alignItems: 'center',
      // justifyContent: 'center',

    },
  },
}));

function SignInAndSignUpPage() {

  const classes = useStyles();
    // Make useState check sessionstorage instead of just using a default value we give it
    // Usually, it just uses a value we give it, but we need to give it a KEY and then check
    // sessionStorage for the value
    const useStateWithSessionStorage = sessionStorageKey => {
      const [token, setToken] = useState(
        sessionStorage.getItem(sessionStorageKey) || '');
        return [token, setToken];
      };
  
    // Just calling above function
    const [token, setToken] = useStateWithSessionStorage('token')
  
    const [isError, setIsError] = useState(false);
    const [isAuthError, setIsAuthError] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [inputUser, setInputUser] = useState("");
    const [inputPassword, setInputPassword] = useState("");
  
    // Hook that makes sure we store token IN BROWSER any time we set it
    useEffect(() => {
      sessionStorage.setItem('token', token);
    }, [token])
  
    const getToken = () => {
      const sendData = async () => {
        setIsAuthenticating(true);
        setIsError(false);
        setIsAuthError(false);
        try {
          const endpoint = 'http://localhost:5000/api/login';
          const data = {
            "username": inputUser,
            "password": inputPassword
          }
          const configs = {
            method: 'POST', 
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        }
          const res = await fetch(endpoint, configs);
          const auth_info = await res.json();
          console.log(auth_info);
          if (auth_info.token){
            setToken(auth_info.token)
          } else {
            setIsAuthError(true);
          }
        } catch (error) {
          console.log(error);
          setIsError(true);
        }
        setIsAuthenticating(false);
      }
      sendData();
    };
  
    let data = null;
  
    if (token) {
        console.log(token);
      data = (
        <div>
          {/* Header is the links listings and add */}
          <Header />
          <Route exact path='/listings' component={Listings} />
          <Route path='/add' component={Add} />
          <button onClick={e => setToken('')}>Log Out</button>
        </div>
      )
    } else {
      data = (
        <div style={{display:"flex"}}>
            {/* <p>This is the Add view!</p> */}
            <div style = {{  margin: "auto"}}>
            <TextField  label="User Name" onChange={e => setInputUser(e.target.value)} placeholder="Username" />
            <br/>
            <TextField  label="Password" type="password" onChange={e => setInputPassword(e.target.value)}/>
            <br/>
            <br/>
            <Button size="small" aria-label="small" variant="contained" onClick={e => getToken()}>Submit</Button>


        </div>
        </div>

        // <div>
        //   <input type="text" onChange={e => setInputUser(e.target.value)} placeholder="Username" />
        //   <input type="password" onChange={e => setInputPassword(e.target.value)} placeholder="Password" />
        //   <button onClick={e => getToken()}>Log In</button>
        //   </div>
      )
    }
  
  
    // Refresh Listings
    return (
      <div className="App">
        {data}
      </div>
    );
  }
export default SignInAndSignUpPage