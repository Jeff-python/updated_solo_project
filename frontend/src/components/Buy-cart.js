
import React, {useState, useEffect} from 'react';
import Buy_Item from './Buy-items';
import './Buy-cart-scss/Buy-cart.scss';


export const Buy_Cart = props =>{

  // let listing =props.map((listing,index) => (
  //   <Item index={index} listing={listing} data={data} removeData={removeData}/>
  // ))

  
  return (
    
    <div className="App2">
      {/* <button onClick={e => Setupdate(!update)}>Refresh Listings</button> */}
      {/* {data.length > 0 && listings} */}
      
      {/* <button onClick = {deleteListing(data[0])}>
       Delete
      </button> */}
    
        <div className='checkout-page2'>
      <div className='checkout-header2'>
        <div className='header-block2'>
          <span>Product</span>
        </div>
        <div className='header-block2'>
          <span>Description</span>
        </div>
        <div className='header-block2'>
          <span>Quantity</span>
        </div>
        <div className='header-block2'>
          <span>Unit Price</span>
        </div>
        <div className='header-block2'>
          <span>Remove</span>
        </div>
      </div>
      </div>
      {/* <Buy_Item cart ={props.cart} removeItem={props.removeItem} listing={item}/> */}
      {/* <div className = 'card-list2' >{props.cart.map(item =><Buy_Item removeItem={props.removeItem} listing={item}/>)}</div> */}
      <div className = 'card-list2' >{props.cart.map((item,index)=><Buy_Item index={index} cartList= {props.CartList} cart ={props.cart} removeItem={props.removeItem} listing={item}/>)}</div>
      </div>
   
  );


};






















// import React, {useState, useEffect} from 'react';
// import Buy_Item from './Buy-items';

// export const Buy_Cart = props =>{
//   const [data, setData] = useState([]);
//   const [update, Setupdate] = useState(false);
//   const user_key = sessionStorage.getItem('token');

//   function removeData(item) {
//     const oldData = [...data];
//     console.log(item)
//     oldData.splice(item,1);
//     setData(oldData);
//     console.log(oldData)
//     const newData = {
//       "pk": data[item][0]
//     }
//     const configs = {
//         method: 'POST', 
//         body: JSON.stringify(newData),
//         mode: 'cors',
//         headers: {'Content-Type': 'application/json'}
//     }
//     const response = fetch("http://localhost:5000/api/delete", configs);
//     console.log(response);
   
//   }




//   useEffect(() => {
//   let getData = async () => {
//     let data = await fetch(`http://localhost:5000/api/buy`)
//     // let data = await fetch(`http://localhost:5000/api/get`);
//     data = await data.json();
//     console.log(data.data);
//     setData(data.data)
//     }
//     getData();
//     }, [update]
//   );

 

  

//   let listing = data.map((listing,index) => (
//     <Buy_Item index={index} listing={listing} data={data} removeData={removeData} />
//   ))


//  return (
    
//     <div className="App">
//       {/* <button onClick={e => Setupdate(!update)}>Refresh Listings</button> */}
//       {/* {data.length > 0 && listings} */}
      
//       {/* <button onClick = {deleteListing(data[0])}>
//        Delete
//       </button> */}
    
//         <div className='checkout-page'>
//       <div className='checkout-header'>
//         <div className='header-block'>
//           <span>Product</span>
//         </div>
//         <div className='header-block'>
//           <span>Description</span>
//         </div>
//         <div className='header-block'>
//           <span>Quantity</span>
//         </div>
//         <div className='header-block'>
//           <span>Unit Price</span>
//         </div>
//         <div className='header-block'>
//           <span>Remove</span>
//         </div>
//       </div>
//       </div>
//       {listing}
//       </div>
      
     
 

//   );}
//   export default Buy_Item;







// // < Buy_Cart cart ={cart} setCart ={setCart}/>

