import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { LanguageContext } from './pages/Language/languag';
import { Button } from 'bootstrap';
import { movisLang } from './store/actions';

export default function Navebar() {
    const count = useSelector((state) => state.count); //بمسك الداتا من الستور
    const { lang, setlang } = useContext(LanguageContext);
    const dipatch = useDispatch();

function changlang(){
    setlang(lang === 'ar' ? 'en' : 'ar')
    dipatch(movisLang(lang))
}

    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center ">
                    <li className="nav-item ">
                            <NavLink className="nav-link " to="/">Home</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link " to="/Movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/fovorites">Fovorites</NavLink>
                        </li>
                        <li className="nav-item">
                            <FontAwesomeIcon className='text-warning mx-3' icon={faStar} size="lg" />
                            <span className='text-warning ' >{count}</span>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary mx-3" name='chang Language' onClick={()=> changlang()} >chang Language</button>
                            {/* <Button  name='chang Language' handleClick={()=> setlang(lang == 'ar' ? 'en' : 'ar')} >chang Language</Button> */}
                            <span  className='text-warning mx-3'> {lang}</span>

                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
