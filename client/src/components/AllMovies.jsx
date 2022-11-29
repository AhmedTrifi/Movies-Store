import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OneMovie from './OneMovie'
import './movies.css'
import Header from './Header'
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
    useEffect(() => {
        fetch()
    }, [])

    const Delete = (id__) => {
        if (window.confirm("are you sure to delete this post")) {

            axios.delete(`/movie/deleteMovie/${id__}`)
                .then(Response => {
                    alert(Response.data.message)
                    window.location.reload()

                })
        }
    }
    return (
        <div>
            <Header />
        <div className="holder">

            {movies.map(({ name, image, description, gender, _id,  }) => {
                return (



                    <OneMovie name={name} image={image} description={description} gender={gender} Id={_id} Delete={Delete}
                    />

                )

            })}

        </div>
        </div>

    )
}

export default AllMovies