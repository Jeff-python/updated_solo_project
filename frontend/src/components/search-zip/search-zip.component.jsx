// import React, {useState} from 'react';

// import './search-zip.style.css'


// export function SearchZip(props) {
//     // const [data, setData] = useState({});
//     const [zipcode, setZipcode] = useState('');
//     const url = `/rest/95igBcYkqxsJtbxZ1OwqKHqC2sNPLVDWoVsk6ez82VVZyPMNIUl2jOMqxQx3ochI/radius.json/${zipcode}/5/miles?minimal`

    

//     const sendData = async () => {
        
//         try {
//           const response = await fetch(url, { mode:'no-cors'});

//           const output = await response.json();
//           // setData(output);
//           // output = (data) => {resolve(data ? JSON.parse(data) : {})}
//           console.log(output);
//           // props.setZips({monsterzipcode:output})
//         } catch (error) {
//           // console.log(error);
//         };
//       };

//     //   astring.slice(0,5)

//       return( 
//       <React.Fragment>
//       <input type = "search" onChange={e => setZipcode(e.target.value)} />
//       <button onClick={e => sendData()}>Go</button>
//       </React.Fragment>
//       );
// }

    


    


