import React from "react";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'


class Footre extends React.Component {
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
                <footer className="text-center text-white " style={{ backgroundColor: ' #21081a' }}>
                    <div className="container p-4 d-flex justify-content-around">
                        <FontAwesomeIcon icon={faCoffee} size="lg" />
                        <FontAwesomeIcon icon={faAddressCard} size="lg" />
                        <FontAwesomeIcon icon={faAddressBook} size="lg" /> </div>
                    <div className="text-center p-3" style={{ backgroundColor: ' rgba(0, 0, 0, 0.2)' }}>


                        © 2020 Copyright:
                        <span className="text-white" >MDBootstrap.com</span>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footre;