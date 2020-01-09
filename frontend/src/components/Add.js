import React, {useState} from 'react';
import ImageUpload from './ImageUpload';


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
            "user_key": sessionStorage.getItem('token')
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

    return (
        
       
        <div className = "Add" style={{backgroundColor:"grey"}}>
            <div>
            <ImageUpload></ImageUpload>
            <div/>
            <p>This is the Add view!</p>
          Description: <input id="description" type="text" onChange={e => setInputDescription(e.target.value)}/><br/>
          Discount Rate: <input id="discountrate" type="text" onChange={e => setInputDiscountRate(e.target.value)}/><br/>
         Retail Price: <input id="retailprice" type="text" onChange={e => setInputRetailPrice(e.target.value)}/><br/>
        Reserve Price: <input id="reserveprice" type="text" onChange={e => setInputReservePrice(e.target.value)}/><br/>
      Expiration Date: <input id="expirationdate" type="text" onChange={e => setInputExpirationDate(e.target.value)}/><br/>
             Quantity: <input id="quantity" type="text" onChange={e => setInputQuantity(e.target.value)}/><br/>
         Contact Name: <input id="contactname" type="text" onChange={e => setInputContactName(e.target.value)}/><br/>
      Telephone Number <input id="telephonenumber" type="text" onChange={e => setInputTelephone(e.target.value)}/><br/>
           Address: <input id="pickuplocation" type="text" onChange={e => setInputPickupLocation(e.target.value)}/><br/>
           Zipcode: <input id="zipcode" type="text" onChange={e => setInputZipCode(e.target.value)}/><br/>
           {/* User_key: <input id="user_key" type="text" onChange={e => setInputUserKey(e.target.value)}/><br/> */}
            <button onClick={e => addListing()}>Add Listing</button>
            </div>
        </div>        
    )
}

export default Add;




