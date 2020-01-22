import React, {useState} from 'react';
import ImageUpload from './ImageUpload';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Home from './Home/Home'

// count = 0
// export const New = ()=> monsters[0]



const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
            // alignItems: 'center',
            // justifyContent: 'center',
    
          },
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 200,
    },
  }));


function Add() {
    const [inputDescription, setInputDescription] = useState('');
    const [inputDiscountRate, setInputDiscountRate] = useState('');
    const [inputRetailPrice, setInputRetailPrice] = useState('');
    const [inputReservePrice, setInputReservePrice] = useState('');
    const [inputExpirationDate, setInputExpirationDate] = useState('');
    const [inputQuantity, setInputQuantity] = useState('');
    const [inputContactName, setInputContactName] = useState('');
    const [inputTelephone, setInputTelephone] = useState('');
    const [inputPickupLocation, setInputPickupLocation] = useState('');
    const [inputZipCode, setInputZipCode] = useState('');
    // const [inputUserkey, setInputUserKey] = useState('');
    const classes = useStyles();

    const addListing = () => {
        const data = {
            "description": inputDescription,
            "discountrate": Number(inputDiscountRate),
            "retailprice": Number(inputRetailPrice),
            "reserveprice": Number(inputReservePrice),
            "expirationdate": inputExpirationDate,
            "quantity": Number(inputQuantity),
            "contactname": inputContactName,
            "telephonenumber": inputTelephone,
            "pickuplocation": inputPickupLocation,
            "zipcode": Number(inputZipCode),
            "user_key": sessionStorage.getItem('token'),
            "imagepath": `/resize_pictures/picture1.jpg`
            // `/Users/jeffreyzheng/byte_academy/phase2/p4_0/frontend/public/resize_pictures/picture${props.monster.length}.jpg`
        }
        const configs = {
            method: 'POST', 
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {'Content-Type': 'application/json'}
        }
        const response = fetch("http://localhost:5000/api/add", configs)
        console.log(response)
    }
// 
    return (
        
       
        <div className = {classes.root} style={{display :"flex"}}>
            <div style = {{ margin: "auto"}}>
            <ImageUpload></ImageUpload>
            {/* <div style = {{display :"flex"}}/> */}
            <div style = {{ margin: "auto"}}>
            
        <TextField
          label="Description*"
          id="standard-start-adornment"
          onChange={e => setInputDescription(e.target.value)} 
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
          endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
        />
            
            <TextField required id="standard-required" label="Discount Rate" onChange={e => setInputDiscountRate(e.target.value)} 
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}/>
            
            <TextField required id="standard-required" label="Retail Price" onChange={e => setInputRetailPrice(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}/>
            <br/>
            <TextField required id="standard-required" label="Reserve Price" onChange={e => setInputReservePrice(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}/>
            
            <TextField required id="standard-required" label="Expiration Date" onChange={e => setInputExpirationDate(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}/>
            
            <TextField required id="standard-required" label="Quantity" onChange={e => setInputQuantity(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}/>
            
            <TextField required id="standard-required" label="Contact Name" onChange={e => setInputContactName(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}/>
            
            <TextField required id="standard-required" label="Telephone Number" onChange={e => setInputTelephone(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}/>
            <br/>
            <TextField required id="standard-required" label="Address" onChange={e => setInputPickupLocation(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}/>
            
            <TextField required id="standard-required" label="Zipcode" onChange={e => setInputZipCode(e.target.value)}
              className={clsx(classes.margin, classes.textField)}
              InputProps={{
              endAdornment: <InputAdornment position="end"></InputAdornment>,
              }}/>
            <br/>
            <br/>
            <div className ={classes.space}>
            <Button  size="small" aria-label="small" variant="contained"onClick={e => addListing()}>Add Listing</Button>
            </div>

            </div>
           
            {/* <p>This is the Add view!</p>
          Description: <input id="description" type="text" onChange={e => setInputDescription(e.target.value)}/><br/>
          Discount Rate: <input id="discountrate" type="text" onChange={e => setInputDiscountRate(e.target.value)}/><br/>
         Retail Price: <input id="retailprice" type="text" onChange={e => setInputRetailPrice(e.target.value)}/><br/>
        Reserve Price: <input id="reserveprice" type="text" onChange={e => setInputReservePrice(e.target.value)}/><br/>
      Expiration Date: <input id="expirationdate" type="text" onChange={e => setInputExpirationDate(e.target.value)}/><br/>
             Quantity: <input id="quantity" type="text" onChange={e => setInputQuantity(e.target.value)}/><br/>
         Contact Name: <input id="contactname" type="text" onChange={e => setInputContactName(e.target.value)}/><br/>
      Telephone Number <input id="telephonenumber" type="text" onChange={e => setInputTelephone(e.target.value)}/><br/>
           Address: <input id="pickuplocation" type="text" onChange={e => setInputPickupLocation(e.target.value)}/><br/>
           Zipcode: <input id="zipcode" type="text" onChange={e => setInputZipCode(e.target.value)}/><br/> */}
           {/* User_key: <input id="user_key" type="text" onChange={e => setInputUserKey(e.target.value)}/><br/> */}
            {/* <button onClick={e => addListing()}>Add Listing</button> */}
            
            </div>
        </div>        
    )
}

export default Add;




