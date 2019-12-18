import React from 'react';
// BrowserRouter as Router
import { Link, Switch, Route } from 'react-router-dom';
// import { CardList } from './components/card-list/card-list.component';
// import {SearchBox} from './components/search-box/search-box.component';
import Listings from './components/Listings';
// import {SearchZip} from './components/search-zip/search-zip.component';
import Home from './components/Home/Home';
import sendData from './components/Home/Home';
import Add from './components/Add';
import Register from './components/Register';
import './App.css';
import './Button.css';
import SignInAndSignUpPage from './components/login/login';

// import {ButtonList} from './components/Button-list/Button-list.component';


function App() {

    return (
     
      <div className="App">
        <header>
          <h3>ABC MARKET</h3>
          <Link to ='/'>Home    </Link>
          <Link to ='/login'>Login    </Link>
          <Link to ='register'>Register</Link>
        </header>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component ={SignInAndSignUpPage}/>
            <Route path='/listings' component={Listings} />
            <Route path='/add' component={Add} />>
            <Route path='/register' component={Register} />>

         </Switch>
         </div>
         );
         }
  


export default App;
