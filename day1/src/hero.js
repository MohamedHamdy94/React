import './App.css'
import './hero.css'

import React from "react";
import LogoImage from './assets/con4.jpg';

const backgroundImag={backgroundImage:`url(${LogoImage})`}
class Hero extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    changeDeperatment = () => {
        this.setState({
        });
    };

    render() {
        return (
            <>
                <div id='img' className="has-bg-img w-100 "  style={ backgroundImag }>
                <div className="d-flex align-items-start flex-column align-content-center p-5 " >
                    <h1>Mohamed Hamdy Ahmed</h1>
                    <h2>download my Protfolio</h2>
                    <h5>It's easy to set background image with Torus Kit</h5>
                    <a href="http://localhost:3000/" download>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">download</button>
                    </a>
                </div>
            </div>
            </>
        );
    }
}

export default Hero;