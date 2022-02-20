import loading from '../../imgs/loading.gif'

const Loader = () => {
    return (
        <div className="loader" style={{paddingBottom: "50px", paddingTop: "50px"}}>
            <img src={loading} alt="Loading"></img>
            <h1>Retrieving data...</h1>
        </div>
    )
}

export default Loader