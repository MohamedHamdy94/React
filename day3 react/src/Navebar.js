import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import   './NavBar.css';

export default function Navebar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item ">
                            <NavLink    className="nav-link " to="/Movies">Movies</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink    className="nav-link " to="/fovorites">Fovorites</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
