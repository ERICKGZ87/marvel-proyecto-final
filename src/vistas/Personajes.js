import { useContext,useEffect } from "react";
import CardPersonajes from "../components/CardPersonajes";

import { Context } from "../store/appContext";



const Personajes = () => {
    const { store,actions } = useContext(Context);


    return (
        <>
            <div className="container">
                <div className="row">
    
                    {
                    Object.keys(store.Personajes).map(key =>{
                        const value = store.Personajes[key];
                        return(

                            <div className="col-sm-4 py-3" key={value.id}>
                                
                                <CardPersonajes

                                    titulo={value.name}
                                    descripcion={value.modified}
                                    Url={value.thumbnail.path+'.jpg'}
                                    
                                   

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
