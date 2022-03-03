function Protfolioo(props) {
    const { myProtofolio } = props;
    return (
        <>
            <div className="container d-flex justify-content-around my-5 row ">
                {myProtofolio.map((Protofolio , index) => {
                    return <div className = {`card text-white w-25 m-3 ${index % 2 ? 'bg-secondary' : 'bg-primary ' }` } >
                        <div className="card-body">
                            <h5 className="card-title" >{Protofolio}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                        </div>
                    </div>
                })}
            </div>
        </>
    );
}
export default Protfolioo