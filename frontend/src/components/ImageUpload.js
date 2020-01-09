import React, {Component} from 'react';
import axios, {post} from 'axios' ;


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
      return(
        <div onSubmit = {this.onFormSubmit}>
          <h1>UPLOAD PNG Images</h1>
          <input type ="file" name ="file" onChange ={(e)=> this.onChange(e)}/>
          {/* <img src="data:image/png;base64,[]"/> */}
        </div>
        
        // <img src="data:image/png;base64,[ENCODED STRING GOES HERE]"></img>
      )
    }
    }

export default ImageUpload;