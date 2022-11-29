import React from 'react'
import { Link } from 'react-router-dom'
import "./movies.css"

function OneMovie({ name, image, description, gender, Id, Delete }) {

    return (

        <div class="card" >
            <img src={image} alt="Avatar"
                style={{ width: "100%" }} />
            <div class="container">

                <h5 class="card-title">{name}</h5>


                <p class="list-group-item">{description}</p>
                <hr />
                <p class="list-group-item">{gender}</p>
                <hr />
                <Link className="button" to={`/${Id}`}>
                    Edit
                </Link>
                <button class="button1" onClick={() => Delete(Id)}>Delete </button>
            </div>


        </div >
    )
}

export default OneMovie