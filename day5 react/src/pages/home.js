import React  from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home() {
    return (
<>

<h1>GO TO MOVISE</h1>
<NavLink className="nav-link " to="/Movies">Movies</NavLink>

</>
    )}