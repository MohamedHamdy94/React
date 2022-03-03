import React from "react";
class AboutMy extends React.Component {
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


                <div className="container-fluid  d-flex">
                    <div className="card col-4"><h1>About me</h1></div>
                    <div className="card col-8">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p>You can pass an existing component as content of the modal window. In this case, 
                                if you're still using Angular 8 or older, remember to add the content component
                                in the  section of your . For Angular 9 or newer, it's not needed anymore.
                            </p>    <span className="btn btn-primary">Go somewhere</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AboutMy;