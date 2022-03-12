import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { addToFovorite, InCount, movis } from "../store/actions";
import MoviesChild from "./movisCihld";

export default function Movies() {
    // const [movie, setMovie] = useState({});

    // const movies = useSelector(state => state.fovoritesList.moveList); //بمسك الداتا من الستور
    const dipatch = useDispatch();

    let movies = useSelector((state) => state.moveList) // مش فاهم ليه لازم اشيل ريزلت واحطها تاني عشان الداتا تظهر

    useEffect(() => {
        dipatch(movis())
        //     axios
        //         .get(
        //             "https://api.themoviedb.org/3/movie/popular?api_key=782991eb3d40e097f0473b979b9ae2e0"
        //         )
        //         .then((res) => {
        //             console.log(res.data.results);
        //             setMovies(res.data.results);
        //         })
        //         .catch((err) => console.log(err));

    }, []);
    const [star, setStar] = useState();
    let count = useSelector((state) => state.count); //بمسك الداتا من الستور
    console.log(count)
    // const movi = useSelector((state) => state.movieArry); //بمسك الداتا من الستور
    const add = (movi) => {
        dipatch(addToFovorite(movi))
        dipatch(InCount(count++))
    };
    return (
        <>
            <div className="container">
                <div className="row ">
                    <MoviesChild />
                    {/* {movies.map((movi) => {
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
                    })} */}
                </div>
            </div>
        </>
    );
}
