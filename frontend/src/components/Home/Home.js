import React, {Component} from 'react';
// import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { CardList } from '../card-list/card-list.component';
import {SearchBox} from '../search-box/search-box.component';
// import Listings from './components/Listings'
import {SearchZip} from '../search-zip/search-zip.component';
import {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import New from '../Add'
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import axios from 'axios';
// import CardList from '../card-list'


// import './App.css';
// import './Button.css';
// import SignInAndSignUpPage from '../login/login';


const useStyles =(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // backgroundColor: "red",
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


// const classes = useStyles();

class Home extends Component {
  
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: '',
      monsterId : 0,
      monsterzipcode:'',
      zipcode: ''
      // classes: useStyles()


    

      
    };
    
    



//   }
  
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(json => console.log(json))


//         users => this.setState({monsters:users}));
   

//   }

}
  
SearchZip() {
  // const [data, setData] = useState({});
  // const [zipcode, setZipcode] = useState('');
  const url = `/rest/95igBcYkqxsJtbxZ1OwqKHqC2sNPLVDWoVsk6ez82VVZyPMNIUl2jOMqxQx3ochI/radius.json/${this.state.zipcode}/5/miles?minimal`



  

  const sendData = async () => {
      
      try {
        const response = await fetch(url, { mode:'no-cors'});

        const output = await response.json();
        const intZip = output.zip_codes.map(zipcode => Number(zipcode))
        // setData(output);
        // output = (data) => {resolve(data ? JSON.parse(data) : {})}
        this.setState({monsterzipcode:intZip});
        // console.log(output);
        // props.setZips({monsterzipcode:output})
      } catch (error) {
        // console.log(error);
      };
    };
    sendData();

// reset() {
//   if 
// }

    // return( 
    //   <React.Fragment>
    //       <input type = "search" onChange={e => this.setState({zipcode: e.target.value})} />
    //        <button onClick={e => SearchZip()}>Go</button>
    //   </React.Fragment>
    //   );


  //   astring.slice(0,5)

  
}

async componentDidMount() {
  fetch('http://localhost:5000/api/getitems')
  .then(response => response.json()).then(json=>{
      this.setState({monsters:json.data});
  })
 }


//   .then(users => this.setState({monsters:users}));
//   console.log(users)
 

// }

  render() { 

    const { classes } = this.props;
    // console.log(classes)
    
    const { monsters, searchField, monsterId } = this.state;
    // console.log(monsters)
    const filteredMonsters = monsters.filter(monster => 
      monster[1].toLowerCase().includes(searchField.toLowerCase()) && monster[2] > monsterId && (this.state.monsterzipcode ? this.state.monsterzipcode.includes(monster[10]) : true)
      // console.log(this.state.monsterzipcode.includes(monster[10]))
      // String.include
     
  
    
      //&& monster.zipcode 
    );
    
    // const filteredname = monsters.filter( monster =>monster.username(searchUsername))
    //   console.log(monsters)
    // console.log(filteredMonsters)
    return (
     
      <div className="App">
           <SearchBox path = '/' component ={SearchBox} placeholder ='Search by Item' handleChange ={e=> this.setState({ searchField: e.target.value})} />
           {/* <input type = "search" placeholder ='Search by Zipcode' onChange={e => this.setState({zipcode: e.target.value})} /> */}
           <Input type = "search" placeholder ='Search by Zipcode' onChange={e => this.setState({zipcode: e.target.value})} />

           {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              onChange={e => this.setState({zipcode: e.target.value})} 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

           {/* <button onClick={e => this.SearchZip()}>Go</button> */}
           <Button variant="contained" size="small" color="white" onClick={e => this.SearchZip()}>Go</Button>

           {/* <SearchZip path = '/' setZips={this.setState} monsterzipcode = {this.state.monsterzipcode} placeholder ='search' handleChange ={e=> this.setState({ monsterzipcode: e.target.value})} /> */}
    
         <div className = "Button">
         {/* <button className = "button1" onClick ={ e => this.setState({ monsterId: `${monster[]}`})}  >Fair Price</button>   */}
            <button className = "button1" onClick ={ e => this.setState({ monsterId: '10' })}  >Fair Price</button>          
            <button className = "button2" onClick ={ e => this.setState({ monsterId: '20' })} >Good Price</button>
            <button className = "button3" onClick ={ e => this.setState({ monsterId: '30' })} >Sale Price</button>
            <button className = "button4" onClick ={ e => this.setState({ monsterId: '40' })} >Bargain Price</button>
            <button className = "button5" onClick ={ e => this.setState({ monsterId: '50' })} >Sweet Price</button>
            <button className = "button6" onClick ={ e => this.setState({ monsterId: '60' })} >ABC Price</button>
          </div>
        
          <CardList monsters={filteredMonsters}>
          </CardList>
          {/* <New monsters = {monsters}></New> */}

          {/* <addListing monsters ={monsters}> </addListing> */}
         
          {/* <p>{this.state.string}</p>
          <button onClick ={()=>this.setState({string:'hello andre'})}>Change Text</button> */}
        
      </div>
     
    );
  }
  
}

export default withStyles(useStyles)(Home);

