import React, {useState} from 'react';

function Buy_Item(props) {
  const [quantity, setQuantity] = useState(0);

  const updateQuantity = () => {
    const data = {
        "item_id": props.listing[0],
        "quantity": Number(quantity),
        "user_key": sessionStorage.getItem('token')
    }
    const configs = {
        method: 'POST', 
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {'Content-Type': 'application/json'}
    }
    const response = fetch("http://localhost:5000/api/buy", configs)
    console.log(response)

    //this.props.cart is a list 
    // cart = [[1,2,3,4,5], [1,2,3,4,5]]
    

//     if( this.props.cart[0][0].includes(props.listing[0]) ){
//         props.listing[6] ++
//     }
//     else{
//         return (
//             <div key={props.index}>
//               <h3>ID: {props.listing[0]}</h3>
//               <h3>Description: {props.listing[1]}</h3>
//               <h3>Discount Rate: {props.listing[2]}</h3>
//               <p>Retail Price: {props.listing[3]}</p>
//               <p>Reserve Price: {props.listing[4]}</p>
//               <p>Expiration Date: {props.listing[5]}</p>
//               <p>Quantity: {props.listing[6]}</p>
//               <p>Contact Name: {props.listing[7]}</p>
//               <p>Telephone Number: {props.listing[8]}</p>
//               <p>Pickup Location: {props.listing[9]}</p>
//               <p>Zipcode: {props.listing[10]}</p>
//               <p>imagepath: {props.listing[12]}</p>
             
//               <input type="text" placeholder="Quantity" onChange={e => setQuantity(e.target.value)}/>
//               <button onClick={e => updateQuantity()}>Update Quantity</button>
//             </div>


//         )
//     }


 }

    return (
       

      <div key={props.index}>
        <h3>ID: {props.listing[0]}</h3>
        <h3>Description: {props.listing[1]}</h3>
        <h3>Discount Rate: {props.listing[2]}</h3>
        <p>Retail Price: {props.listing[3]}</p>
        <p>Reserve Price: {props.listing[4]}</p>
        <p>Expiration Date: {props.listing[5]}</p>
        <p>Quantity: {props.listing[6]}</p>
        <p>Contact Name: {props.listing[7]}</p>
        <p>Telephone Number: {props.listing[8]}</p>
        <p>Pickup Location: {props.listing[9]}</p>
        <p>Zipcode: {props.listing[10]}</p>
        <p>imagepath: {props.listing[12]}</p>
       
        <input type="text" placeholder="Quantity" onChange={e => setQuantity(e.target.value)}/>
        <button onClick={e => updateQuantity()}>Update Quantity</button>
      </div> 
    )
     
}


export default Buy_Item;