import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const DetalleComics = (props) => {

    const { store, actions } = useContext(Context);

    const Historia = useHistory()

    const { product_id } = useParams();

    const [selected, setSelected] = useState(null);
  
    useEffect(() => {
 
        const SelectedComic = store.Comics.find((prod) => prod.id === parseInt(product_id));
       
        setSelected(SelectedComic);
        console.log(SelectedComic)
        console.log(product_id)

    }, [])  
    let extensionImagen = selected && selected.thumbnail.extension

    return (

        <div className="container">

            <div className="row">


                <div className="col-md-12">
                    <div className="card mb-4" style={{ maxWidth: 700 }}>
                        <div className="row g-0"> 
                            <div className="col-md-4">
                          
                                <img src={selected && selected.thumbnail.path +'.'+extensionImagen} className="card-img-top img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{selected && selected.title}</h5>
                                    <p className="card-text">
                                        {selected && selected.description}
                                    </p>
                                    <p className="card-text">
                                        <ul>
                                                
                                            <li key={selected && selected.id}>{selected && 
                                            selected.stories.items[0].name}</li>
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
export default DetalleComics;