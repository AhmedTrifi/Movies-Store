import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './movies.css'
function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({})


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/user/signup", form)
            .then(response => {
                alert(response.data.message)
                navigate('/signin')

            })
            .catch(error => console.log(error))


    }

    return (

        <div className="Auth-form-container">
          <form className="Auth-form"  onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary"  >
                <Link to={`/signin`}> signin</Link>
                </span>
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                required
                  type="email"
                  className="form-control mt-1"
                  placeholder="Email Address"
                  name='email'
                   onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                required
                   type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                  name='password'
                   onChange={handleChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              
            </div>
          </form>
        </div>
     
        
      )

}

export default Signup