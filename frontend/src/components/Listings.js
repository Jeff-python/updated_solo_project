import React, {useState, useEffect} from 'react';
import Item from './Item';

function Listings() {
  const [data, setData] = useState([]);
  const [update, Setupdate] = useState(false);

  useEffect(() => {
  let getData = async () => {
    let data = await fetch('http://localhost:5000/api/get');
    data = await data.json();
    console.log(data.data);
    setData(data.data)
    }
    getData();
    }, [update]
  );

  let listings = data.map((listing, index) => {
    return (
      <Item listing={listing} key={index}/>
    )
  })

  return (
    <div className="App">
      <button onClick={e => Setupdate(!update)}>Refresh Listings</button>
      {data.length > 0 && listings}
    </div>
  );
}

export default Listings;
