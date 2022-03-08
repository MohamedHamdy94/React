import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { addToFovorite, InCount, movis } from "../store/actions";

export default function MoviesChild() {
    
    // const movies = useSelector(state => state.fovoritesList.moveList); //بمسك الداتا من الستور
    const dipatch = useDispatch();
    
    let movies= useSelector((state) => state.moveList) // مش فاهم ليه لازم اشيل ريزلت واحطها تاني عشان الداتا تظهر

    useEffect(() => {
        dipatch(movis())
    }, []);
    const [isFound, setFound] = useState();

    const [star, setStar] = useState();
    let count = useSelector((state) => state.count); //بمسك الداتا من الستور
    console.log(count)
    const movieArry = useSelector((state) => state.movieArry); //بمسك الداتا من الستور
    const add = (movi) => {
        let isFound = movieArry?.find((i) => i.id === movi.id);
        setFound(isFound); 
        dipatch (addToFovorite (movi))
        dipatch (InCount(count++) )
    };
    return (
        <>

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
                                    <FontAwesomeIcon
                                        onClick={() => add(movi)}
                                        className={`mx-3 ${star ? "text-warning" : "text-dark "}`}
                                        icon={faStar}
                                        size="lg"
                                    />
                                </div>
                            </div>
                        );
                    })}

        </>
    );
}