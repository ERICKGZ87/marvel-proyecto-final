import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const DetallePersonaje = (props) => {
    const { store, actions } = useContext(Context);

    const Historia = useHistory()


    const { product_id } = useParams();

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        // console.log(product_id)
        //const SelectedProd = images.find((prod)=>prod.id == product_id);

        const SelectedProd = store.Personajes.find((prod) => prod.id === parseInt(product_id));
        setSelected(SelectedProd);

    }, [])

    return (
      
        <div className="container">

            <div className="row">

              
                <div className="col-md-12">
                    <div className="card mb-4" style={{ maxWidth: 700 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={selected && selected.thumbnail.path+'.jpg'} className="card-img-top img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{selected && selected.name}</h5>
                                    <p className="card-text">
                                    {selected && selected.description}
                                    </p>
                                    <p className="card-text">
                                        <ul>
                                            <li key={selected && selected.id}>{selected && selected.comics[0]}</li>
                                        </ul>
                                    </p>
                                  
                                   
                                </div>
                                <button className="btn btn-warning"
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

export default DetallePersonaje;