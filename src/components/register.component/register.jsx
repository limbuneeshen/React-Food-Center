import './register.css';
import React from 'react';

const Register=()=> (
            <form className='registerform'>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

               
               

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
export default Register;