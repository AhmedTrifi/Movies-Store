import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OneMovie from './OneMovie'

function AllMovies() {
    const [movies, setMovies] = useState([])
    const fetch = () => {
        axios.get("/movie/getMovies")
            .then(response => {
                console.log(response.data);
                setMovies(response.data)

            })
            .catch(err => { console.log(err) })

    }
    useEffect = () => {
        fetch()
    }
    return (
        <div>
            {movies.map(({ name, image, description, gender  }) =>{
                <OneMovie name={name} image={image} description={description} gender={gender}

                />
                console.log("rrrrrrrrrrrrrrrrrrrrrr",name, image, description, gender)

})}
        </div>
    )
}

export default AllMovies