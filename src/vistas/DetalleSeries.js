import { useEffect } from "react";
import { useParams, useHistory, useLocation} from "react-router-dom";;

const DetalleSeries = (props) => {

    const Historia = useHistory()
    const { product_id } = useParams();
    const location = useLocation()
   
    useEffect(() => {
     
        console.log("title", location.state)

    }, [product_id])  

    if(location.state  === undefined) {
        return
        (
            <div>
                Sin datos para mostrar.
                <button 
                    className="col-md-4 btn btn-warning"
                    onClick={Historia.goBack}
                    >
                     Regresar
                </button>
            </div>
        )
    }

    return (

        <div className="container">

            <div className="row">


                <div className="col-md-12 mt-4">
                    <div className="card mb-4">
                        <div className="row g-0"> 
                            <div className="col-md-4 me-4">
                                <img src={typeof location.state.foto !== 'undefined' ? location.state.foto : null} className="card-img-top img-fluid rounded-start me-4" alt="..." />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title">{location.state.title? location.state.title : null}</h5>
                                    <p className="card-text">
                                    {location.state.description? location.state.description : null}
                                    </p>
                                    <p className="card-text">
                                    </p>
                                </div>
                                <button className=" col-md-4 btn btn-warning"
                                    onClick={Historia.goBack}>
                                    Regresar
                                </button>

                                
                            </div>
                        </div>
                    </div>
                </div>




            </div>


        </div>


    )
}
export default DetalleSeries;