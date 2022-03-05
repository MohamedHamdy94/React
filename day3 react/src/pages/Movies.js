import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([])
    const history = useHistory
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=782991eb3d40e097f0473b979b9ae2e0')
            .then((res) => {
                console.log(res.data.results)
                setMovies(res.data.results)
            }).catch((err) => console.log(err))
    }, [])

    return (<>
        <div className="container">
            <div className="row d-flex justify-content-center">
                {movies.map((movi) => {
                    return (<div className="card w-25 m-3" >
                        <img className="card-img-top" src={`http://image.tmdb.org/t/p/w500/${movi.poster_path}`} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title"> {movi.original_title}</h5>
                            <h6 className="card-title"> {movi.vote_average}</h6>

                            <Link to={`/details/${movi.id}`} key={movi.id} >
                                <button  className="btn btn-primary">Details</button>
                            </Link>
                        </div>
                    </div>
                    )
                })}
            </div></div>
    </>)

}