import { useContext, useEffect } from "react";
import CardPersonajes from "../components/CardPersonajes";



import { Context } from "../store/appContext";



const Personajes = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
            <div className="container">
                <div className="row">

                    {
                     
                        Object.keys(store.Personajes).map(key => {
                            const value = store.Personajes[key];
                            let extensar = value.urls[0].url
                            let exten = value.thumbnail.extension
                    
                            return (

                                <div className="col-sm-4 py-3" key={value.id}>

                                    <CardPersonajes

                                        titulo={value.name}

                                        descripcion={value.id}
                                        Url={value.thumbnail.path + '.' + exten}
                                        id={value.id}
                                        wiki={extensar}
                                      
                                      



                                    />


                                </div>
                            )

                        }
                        )



                    }



                </div>
            </div>
        </>
    )
}
export default Personajes;
