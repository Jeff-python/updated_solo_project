import React, { useState } from "react";
import "../components/Buy-items-scss/buy-items.scss";
// import './item-scss/item.scss';

function Buy_Item(props) {
  const [quantity, setQuantity] = useState('');

  const updateQuantity = () => {
    const data = {
      item_id: props.listing[0],
      quantity: Number(quantity),
      user_key: sessionStorage.getItem("token")
    };
    const configs = {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    };
    const response = fetch("http://localhost:5000/api/buy", configs);
    console.log(response);
  };

  const addQuantity = () => {
    const data = {
      item_id: props.listing[0],
      quantity: setQuantity(Number(quantity + 1)),
      user_key: sessionStorage.getItem("token")
    };
    console.log(props.listing[0]);
    console.log(props.listing);
    console.log(props.data);
    const configs = {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    };
    const response = fetch("http://localhost:5000/api/buy", configs);
    console.log(response);
  };

  const minusQuantity = () => {
    const data = {
      item_id: props.listing[0],
      quantity: setQuantity(Number(quantity - 1)),
      user_key: sessionStorage.getItem("token")
    };

    const configs = {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    };
    const response = fetch("http://localhost:5000/api/buy", configs);
    console.log(response);
    // props.removeData(props.key)
  };
  // if (window.sessionStorage.getItem("token")) {
    const string = window.sessionStorage.getItem(`${props.cart[props.index]}`);
    const newthing = string.split(",");
    console.log(("new", quantity));
    console.log(("new", newthing[6]));
    console.log(props.cartList);
    

    return (
      <div className="checkout-item2">
        <div className="image-container2">
          {/* <img width="40" alt ="image2" src={`${props.listing[12]}`} /> */}
          <img width="40" alt="image2" src={newthing[12]} />
        </div>
        {/* <span className="name2">{props.listing[1]}</span> */}
        <span className="name2">{newthing[1]}</span>
        <span className="quantity2">
          <div className="arrow2" onClick={e => minusQuantity()}>
            &#10094;
          </div>
          <span className="value2">{newthing[6]-quantity+1}</span>
          <div className="arrow2" onClick={e => addQuantity()}>
            &#10095;
          </div>
        </span>
        <span className="price2">{newthing[4]}</span>
        <form id="form2">
          <button
            className="remove-button"
            onClick={e => {
              props.removeItem(props.cart[0]);
            }}
          >
            x{/* <p>imagepath: {props.listing[12]}</p> */}
            {/* &#10005; */}
          </button>
        </form>
      </div>

      // <div key={props.index}>
      //   <h3>ID: {props.listing[0]}</h3>
      //   <h3>Description: {props.listing[1]}</h3>
      //   <h3>Discount Rate: {props.listing[2]}</h3>
      //   <p>Retail Price: {props.listing[3]}</p>
      //   <p>Reserve Price: {props.listing[4]}</p>
      //   <p>Expiration Date: {props.listing[5]}</p>
      //   <p>Quantity: {props.listing[6]}</p>
      //   <p>Contact Name: {props.listing[7]}</p>
      //   <p>Telephone Number: {props.listing[8]}</p>
      //   <p>Pickup Location: {props.listing[9]}</p>
      //   <p>Zipcode: {props.listing[10]}</p>
      //   <p>imagepath: {props.listing[12]}</p>

      //   <input type="text" placeholder="Quantity" onChange={e => setQuantity(e.target.value)}/>
      //   <button onClick={e => updateQuantity()}>Update Quantity</button>
      // </div>
    );
  // }
  // else {
  //   return (<p>Didn't find token!!</p>)
  // }
}

export default Buy_Item;

// import React, {useState} from 'react';

// function Buy_Item(props) {
//   const [quantity, setQuantity] = useState(0);

//   const updateQuantity = () => {
//     const data = {
//         "item_id": props.listing[0],
//         "quantity": Number(quantity),
//         "user_key": sessionStorage.getItem('token')
//     }
//     const configs = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         mode: 'cors',
//         headers: {'Content-Type': 'application/json'}
//     }
//     const response = fetch("http://localhost:5000/api/buy", configs)
//     console.log(response)

//   const addQuantity = () => {
//     const data = {
//         "item_id": props.listing[0],
//         "quantity": setQuantity(Number(quantity+1)),
//         "user_key": sessionStorage.getItem('token')
//     }
//     console.log(props.listing[0])
//     console.log(props.listing)
//     console.log(props.data)
//     const configs = {
//         method: 'POST',
//         body: JSON.stringify(data),
//         mode: 'cors',
//         headers: {'Content-Type': 'application/json'}
//     }
//     const response = fetch("http://localhost:5000/api/buy", configs)
//     console.log(response)
// }

// const minusQuantity = () => {
//   const data = {
//       "item_id": props.listing[0],
//       "quantity": setQuantity(Number(quantity-1)),
//       "user_key": sessionStorage.getItem('token')
//   }

//   const configs = {
//       method: 'POST',
//       body: JSON.stringify(data),
//       mode: 'cors',
//       headers: {'Content-Type': 'application/json'}
//   }
//   const response = fetch("http://localhost:5000/api/buy", configs)
//   console.log(response)
// props.removeData(props.key)

// }

//     return (

//   <div className='checkout-item'>
//   <div className='image-container'>
//   <img alt ="image" src ={`${props.listing[12]}`} />
//   </div>
//   <span className='name'>{props.listing[1]}</span>
//   <span className='quantity'>
//     <div className='arrow' onClick={e => minusQuantity()}>
//       &#10094;
//     </div>
//     <span className='value'>{quantity}</span>
//     <div className='arrow' onClick={e => addQuantity()}>
//       &#10095;
//     </div>
//   </span>
//   <span className='price'>{props.listing[4]}</span>
//    {/* <p>imagepath: {props.listing[12]}</p> */}
//   {/* <h3>ID: {props.listing[0]}</h3>  */}
//   <form id='form'>
//   {/* <div className='remove-button' onClick={e =>deleteListing(props.listing[0]) }> */}
//   <div className='remove-button' onClick={e =>{props.addToCart(props.listing[0])} }>

//   {/* onClick= {e => props.addToCart(props.monster)}
//   e => props.removeData(props.listing[0]) */}
//     &#10005;
//   </div>
//   </form>
// </div>

//     )

// }
// }

// export default Buy_Item;
