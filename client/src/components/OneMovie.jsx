import React from 'react'

function OneMovie({ name, image, description, gender }) {
    console.log("----------",name,image,description, );

    return (
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src={image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>

            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{description}</li>
                <li class="list-group-item">{gender}</li>

            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>)
}

export default OneMovie