import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import   './NavBar.css';
import { faStarAndCrescent } from '@fortawesome/free-solid-svg-icons'
import { faStarOfDavid } from '@fortawesome/free-solid-svg-icons'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

export default function Navebar() {
    const count = useSelector((state) => state.count); //بمسك الداتا من الستور

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center ">
                        <li className="nav-item ">
                            <NavLink    className="nav-link " to="/Movies">Movies</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink    className="nav-link " to="/fovorites">Fovorites</NavLink>
                        </li>
                        <li className="nav-item">
                        <FontAwesomeIcon className='text-warning mx-3' icon={faStar} size="lg" />
                        <span className='text-warning ' >{count}</span>
                        {/* <FontAwesomeIcon icon={faStarOfDavid} size="lg" />
                        <FontAwesomeIcon icon={faStarOfLife} size="lg" />
                        <FontAwesomeIcon icon={faStar} size="lg" /> */}

                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}
