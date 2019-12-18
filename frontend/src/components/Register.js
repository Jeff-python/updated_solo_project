import React, {useState} from 'react';


function Register() {
    const [inputFirstName, setInputFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [inputUserName, setInputUserName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassWord, setInputPassWord] = useState('');
    // const [inputUserkey, setInputUserKey] = useState('');

    const addUser = () => {
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
        console.log(response)
    }

    return (
        <div style={{backgroundColor:"grey"}}>
            <p>This is the Add view!</p>
          First Name: <input id="First Name" type="text" onChange={e => setInputFirstName(e.target.value)}/><br/>
          Last Name: <input id="Last Name" type="text" onChange={e => setInputLastName(e.target.value)}/><br/>
         User Name: <input id="User Name" type="text" onChange={e => setInputUserName(e.target.value)}/><br/>
        Email: <input id="Email" type="text" onChange={e => setInputEmail(e.target.value)}/><br/>
      Password: <input id="Password" type="password" onChange={e => setInputPassWord(e.target.value)}/><br/>

           {/* User_key: <input id="user_key" type="text" onChange={e => setInputUserKey(e.target.value)}/><br/> */}
            <button onClick={e => addUser()}>Submit</button>
        </div>        
    )
}

export default Register;




