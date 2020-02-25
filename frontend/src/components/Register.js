import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useForceUpdate from 'use-force-update';
import { Typography } from '@material-ui/core';

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


function Register({history}) {
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputUserName, setInputUserName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassWord, setInputPassWord] = useState('');
    const [reset, setReset] = useState(false);
    // const [inputUserkey, setInputUserKey] = useState('');
    const classes = useStyles();

    const forceUpdate = useForceUpdate();

 

   function addUser()  {

        const data = {
            "firstname": inputFirstName,
            "lastname": inputLastName,
            "username": inputUserName,
            "email": inputEmail,
            "password": inputPassWord,
            "user_key": sessionStorage.getItem('token')
        }
        const configs = {
            method: 'POST', 
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        }
        const response = fetch("http://localhost:5000/api/register", configs)
        // setReset(true);
        // if (reset); {
        
        //   }
        // console.log(data);

        // forceUpdate();
        // setUpdateBool({});
        // history.push('/register');

        document.getElementById("form").reset();
        // history.push('/login');
        
        
        
    }

    return (
        <form id = 'form' style={{display:"flex"}}>
            {/* <p>This is the Add view!</p> */}
            
           
            <div style = {{  margin: "auto"}}>
            <Typography color="primary" style={{ fontSize: '25px' }} style={{ fontWeight: 'Bold' }} >
              Registration
            </Typography>
            <TextField required id="standard-required" label="First Name" onChange={e => setInputFirstName(e.target.value)}/>
            <br/>
            <TextField required id="standard-required" label="Last Name" onChange={e => setInputLastName(e.target.value)}/>
            <br/>
            <TextField required id="standard-required" label="User Name" onChange={e => setInputUserName(e.target.value)}/>
            <br/>
            <TextField required id="standard-required" label="Email Address" onChange={e => setInputEmail(e.target.value)}/>
            <br/>
            <TextField required id="standard-required" type="password" label="Password" onChange={e => setInputPassWord(e.target.value)} />
            <br/>
            <br/>
            <Button size="small" aria-label="small" variant="contained" onClick={e => addUser()}>Submit</Button>
            
            {/* <button onClick={e => addUser()}>Submit</button> */}
            </div>
{/* 
          First Name: <input id="First Name" type="text" onChange={e => setInputFirstName(e.target.value)}/><br/>
          Last Name: <input id="Last Name" type="text" onChange={e => setInputLastName(e.target.value)}/><br/>
         User Name: <input id="User Name" type="text" onChange={e => setInputUserName(e.target.value)}/><br/>
        Email: <input id="Email" type="text" onChange={e => setInputEmail(e.target.value)}/><br/>
      Password: <input id="Password" type="password" onChange={e => setInputPassWord(e.target.value)}/><br/> */}
      

           {/* User_key: <input id="user_key" type="text" onChange={e => setInputUserKey(e.target.value)}/><br/> */}
           
        </form>        
    )
}

export default Register;




