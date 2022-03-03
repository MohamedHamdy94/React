import React from "react";
import Skillss from "./skillsChild";
class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
mySkills:[
    {namee:'HTML',range:'90'},
    {namee:'CSS',range:'80'},
    {namee:'Angular',range:'60'},
    {namee:'React',range:'70'},
]
        };
    }

    changeDeperatment = () => {
        this.setState({

        });
    };

    render() {
        const {mySkills} =this.state;
        return (
            <>
                <div className="card text-center bg-dark text-white">
                    <div className="card-body">
                        <h2 className="card-title">Skills</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Corrupti ex optio fugiat pariatur vitae accusantium, dignissimos amet neque numquam
                            ea debitis officia molestias voluptates perspiciatis aperiam esse labore omnis ut?
                            With supporting text below as a natural lead-in to additional content.</p>

<Skillss mySkills={mySkills}/>
                    </div>

                </div>

            </>
        );
    }
}

export default Skills;