import React, {Component} from 'react';
import axios, {post} from 'axios' ;
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const useStyles =(theme => ({
  title: {
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

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: ''
        }
      }
      onChange(e)
      {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) =>{
      console.warn("img data" , e.target.result)
    
      const url = "http://localhost:5000/upload";
      const formData = {file:e.target.result}
      
      return post(url, formData)
      .then(response =>console.warn("result", response))
    
    }
      }
    
    render(){
      const { classes } = this.props;
      return(
        <div onSubmit = {this.onFormSubmit}>
        <Typography variant="h6" className={classes.title}>
        UPLOAD PNG Images
        </Typography>
          

          
          
          <input type ="file" name ="file" onChange ={(e)=> this.onChange(e)}/>
           {/* <img alt ="image" src ={`/resize_pictures/picture${this.props.monster[12]}.jpg`} />  */}
          

          {/* <img src="data:image/png;base64,[]"/> */}
        </div>
        
        // <img src="data:image/png;base64,[ENCODED STRING GOES HERE]"></img>
      )
    }
    }

export default withStyles(useStyles)(ImageUpload);