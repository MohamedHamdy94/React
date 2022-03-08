import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { movisDitails } from "../store/actions";

export default function Details() {

//  const [movi, setMovies] = useState({})
const movi = useSelector(state=>state.moveDetails)
    const params = useParams();
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(movisDitails(params.id)) 
        // axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=782991eb3d40e097f0473b979b9ae2e0`)
        //     .then((res) => {
        //         console.log(res)
                
        //         setMovies(res.data)
        //     })
        //     .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="card w-75 m-3" >
                    <img className="card-img-top" src={`http://image.tmdb.org/t/p/w500/${movi.poster_path}`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title"> {movi.original_title}</h5>
                        <h5 className="card-title"> {movi.overview}</h5>
                    </div>
                </div>
            </div>
        </>)

}