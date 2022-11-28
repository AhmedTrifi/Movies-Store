import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function AddMovie() {
  const  [form, setForm] = useState({})
    const navigate =useNavigate()
    const onchangeHandler=(e)=>{
        setForm({
            ...form ,
            [e.target.name]: e.target.value
        })
    }
    const submitHundler = (e)=>{
        e.preventDefault()
        axios.post("/movie/addMovie",form)
        .then(response=>{
            alert(response.data.message)
            navigate("/")
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className="container">
            <form onSubmit={submitHundler}>
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" class="form-control" name="name" placeholder="Enter movie Name" onChange={onchangeHandler}/>
                </div>
                <div class="form-group">
                    <label for="gender">Movie Gender</label>
                    <select class="form-control" name="gender" onChange={onchangeHandler}>
                        <option>Horror</option>
                        <option>Romantic</option>
                        <option>Fantasy</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="text" class="form-control" name="image" placeholder="Enter your movie image url" onChange={onchangeHandler}/>
                </div>
                <div class="form-group">
                    <label for="description">Movie Review</label>
                    <textarea class="form-control" name="description" rows="3" onChange={onchangeHandler}></textarea>
                </div>


                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default AddMovie