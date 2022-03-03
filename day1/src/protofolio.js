import React from "react";
import Protfolioo from "./protofolioChild";
class Protofolio extends React.Component {
    constructor() {
        super();
        this.state = {
myProtofolio:['HTML','CSS','SCSS','JS','Angular','React']
        };
    }

    changeDeperatment = () => {
        this.setState({
        });
    };

    render() {
        const {myProtofolio}=this.state ;
        return (
            <>
                <div className="p-3 mb-2  ">
                    <h1>Protfolio</h1>

<Protfolioo myProtofolio={myProtofolio}/>

                </div>
            </>
        );
    }
}

export default Protofolio;