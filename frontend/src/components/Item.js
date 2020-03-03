import React, { useState, useEffect } from "react";
import "./item-scss/item.scss";

function Item(props) {
  const [quantity, setQuantity] = useState(props.listing[6]);
  const [data, setData] = useState(props.data);

  console.log("props.key", props.index);
  console.log("id", data[props.index][0]);
  // const [update, Setupdate] = useState(false);
  // const user_key = sessionStorage.getItem('token');
  // change data - default value should be your full dataset from props

  // make new DeleteListing function
  // should take in the item to be deleted
  // should change STATEFUL data to data minus deleted listing

  // you will use this as your useEffect function
  // useffect function will delete the item once STATEFUL variable Data changes

  // useEffect(() => {
  //   let getData = async () => {
  //     let data = await fetch(`http://localhost:5000/api/listings/${user_key}`)
  //     data = await data.json();
  //     console.log(data.data);
  //     setData(data.data)
  //     }
  //     getData();
  //     }, [update]
  //   );

  //   const deleteListing = async () => {
  //     const data = {
  //       "pk": props.listing[0]
  //     }
  //     const configs = {
  //         method: 'POST',
  //         body: JSON.stringify(data),
  //         mode: 'cors',
  //         headers: {'Content-Type': 'application/json'}
  //     }
  //     const response = fetch("http://localhost:5000/api/delete", configs);
  //     console.log(response);

  // }

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

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="image" src={`${props.listing[12]}`} />
      </div>
      <span className="name">{props.listing[1]}</span>
      <span className="quantity">
        <div className="arrow" onClick={e => minusQuantity()}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={e => addQuantity()}>
          &#10095;
        </div>
      </span>
      <span className="price">{props.listing[4]}</span>
      {/* <p>imagepath: {props.listing[12]}</p> */}
      {/* <h3>ID: {props.listing[0]}</h3>  */}
      <form id="form">
        {/* <div className='remove-button' onClick={e =>deleteListing(props.listing[0]) }> */}
        <div
          className="remove-button"
          onClick={e => {
            props.removeData(props.index);
          }}
        >
          {/* onClick= {e => props.addToCart(props.monster)}
      e => props.removeData(props.listing[0]) */}
          &#10005;
        </div>
      </form>
    </div>
  );

  {
    /* <form/> */
  }

  {
    /* // <div key={props.index}>
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

      //   <img alt ="image" src ={`${props.listing[12]}`} />
       
      //   <input type="text" placeholder="Quantity" onChange={e => setQuantity(e.target.value)}/>
      //   <button onClick={e => updateQuantity()}>Update Quantity</button>
      //   <button onClick = {e=> deleteListing(props.listing[0])}>
      //  Delete
      // </button>
      // </div> */
  }
  // );
}

export default Item;
