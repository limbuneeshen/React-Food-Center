import React from 'react';
import './restregister.css';
import {Link} from 'react-router-dom';
class RestRegister extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["restname"] = "";
        input["contactname"] = "";
        input["restemail"] = "";
        input["rpassword"] = "";
        input["rconfirm_password"] = "";
        this.setState({input:input});
  
        alert('Register Form is submited');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["restname"]) {
        isValid = false;
        errors["restname"] = "Please enter your restaurant name.";
      }
      if (!input["contactname"]) {
        isValid = false;
        errors["contactname"] = "Please enter your contact name.";
      }
  
      if (!input["restemail"]) {
        isValid = false;
        errors["restemail"] = "Please enter your email Address.";
      }
  
      if (typeof input["restemail"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["restemail"])) {
          isValid = false;
          errors["restemail"] = "Please enter valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}  className='registerform'>
        <h3>Register</h3>
          <div class="form-group">
            <label for="restname">Name of Restaurant:</label>
            <input 
              type="text" 
              name="restname" 
              value={this.state.input.restname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter name of the restaurant" 
              id="restname" />
  
              <div className="text-danger">{this.state.errors.restname}</div>
          </div>

          <div class="form-group">
            <label for="contactname">Contact Name:</label>
            <input 
              type="text" 
              name="contactname" 
              value={this.state.input.contactname}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter your contact name" 
              id="contactname" />
  
              <div className="text-danger">{this.state.errors.contactname}</div>
          </div>
  
          <div class="form-group">
            <label for="restemail">Email Address:</label>
            <input 
              type="text" 
              name="restemail" 
              value={this.state.input.restemail}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter email" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.restemail}</div>
          </div>
   
          <div class="form-group">
            <label for="password">Password:</label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="password">Confirm Password:</label>
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter confirm password" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
              
          <input type="submit" value="Submit" class="btn btn-primary" />
          <Link className='option' to='/restlogin'>Already Have an Account?</Link>
        </form>
      </div>
    );
  }
}
  
export default RestRegister;