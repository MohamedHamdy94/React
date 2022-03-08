// import React, { useEffect, useState } from "react";

import {  useSelector } from "react-redux"
import { Link } from "react-router-dom";

// import axios from "axios";
export default function Fovorites() {
    const movies = useSelector(( state ) => state.movieArry) ; //بمسك الداتا من الستور

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    {movies.map((movi) => {
                        return (
                            <div className="card w-25 m-3">
                                <img
                                    className="card-img-top"
                                    src={`http://image.tmdb.org/t/p/w500/${movi.poster_path}`}
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <h5 className="card-title"> {movi.original_title}</h5>
                                    <h6 className="card-title"> {movi.vote_average}</h6>
                                    <Link to={`/details/${movi.id}`} key={movi.id}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>)

}