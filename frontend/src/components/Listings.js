import React, {useState, useEffect} from 'react';
import Item from './Item';
import './listing-scss/Listing.scss';

function Listings() {
  const [data, setData] = useState([]);
  const [update, Setupdate] = useState(false);
  const user_key = sessionStorage.getItem('token');

  function removeData(item) {
    const oldData = [...data];
    console.log(item)
    oldData.splice(item,1);
    setData(oldData);
    console.log(oldData)
    const newData = {
      "pk": data[item][0]
    }
    const configs = {
        method: 'POST', 
        body: JSON.stringify(newData),
        mode: 'cors',
        headers: {'Content-Type': 'application/json'}
    }
    const response = fetch("http://localhost:5000/api/delete", configs);
    console.log(response);
   
  }




  useEffect(() => {
  let getData = async () => {
    let data = await fetch(`http://localhost:5000/api/listings/${user_key}`)
    // let data = await fetch(`http://localhost:5000/api/get`);
    data = await data.json();
    console.log(data.data);
    setData(data.data)
    }
    getData();
    }, [update]
  );

  let listing =data.map((listing,index) => (
    <Item index={index} listing={listing} data={data} removeData={removeData}/>
  ))
  {/* CheckoutPage() */}
  

  // let listings = data.map((listing, index))
  //  => {
  //   return (
  //     <Item listing={listing} key={index}/>
  //   )
  // })

  // function reset(){
  //   setData()
  // }
  
  return (
    
    <div className="App">
      {/* <button onClick={e => Setupdate(!update)}>Refresh Listings</button> */}
      {/* {data.length > 0 && listings} */}
      
      {/* <button onClick = {deleteListing(data[0])}>
       Delete
      </button> */}
    
        <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Unit Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      </div>
      {listing}
      
      </div>
   
  );
}
// let listings = data.map((listing, index) => {
//   return (
//     <Item listing={listing} key={index}/>
//   )

export default Listings;
