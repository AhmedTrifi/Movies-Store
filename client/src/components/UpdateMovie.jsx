import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateMovie() {
    const [form, setForm] = useState({});
        const [data, setData] = useState({});
    

     const { id } = useParams();
    const navigate =useNavigate()

    useEffect(() => {

        axios.get(`/movie/getOneMovie/${id}`).then((res) => {
            setData(res.data);
        })
    })
    const onchangeHandler=(e)=>{
        setForm({
            ...form ,
            [e.target.name]: e.target.value
        })
    }
    const submitHundler = (e)=>{
        console.log(form);
        e.preventDefault()
        axios.put(`/movie/updateMovie/${id}`,form)
        .then(response=>{
            alert(response.data.message)
            navigate("/home")
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className="container">
            <form onSubmit={submitHundler}>
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" class="form-control" name="name" placeholder="Enter movie Name" onChange={onchangeHandler} defaultValue={data.name} />
                </div>
                <div class="form-group">
                    <label for="gender">Movie Gender</label>
                    <select class="form-control" name="gender" onChange={onchangeHandler} defaultValue={data.gender}>
                        <option>Horror</option>
                        <option>Romantic</option>
                        <option>Fantasy</option>
                        <option>Drama</option>
                        <option>Action</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="text" class="form-control" name="image" placeholder="Enter your movie image url" onChange={onchangeHandler} defaultValue={data.image} />
                </div>
                <div class="form-group">
                    <label for="description">Movie Review</label>
                    <textarea class="form-control" name="description" rows="3" onChange={onchangeHandler} defaultValue={data.description}></textarea>
                </div>


                <button type="submit" class="btn btn-primary" >Update</button>
            </form>
        </div>
    )
}

export default UpdateMovie