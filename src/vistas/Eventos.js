import { useContext, useEffect } from "react";
import CardEventos from "../components/CardEventos";


import { Context } from "../store/appContext";

const Eventos = () => {
    const { store, actions } = useContext(Context);


    return (
        <>
            <div className="container">
                <div className="row">

                    {

                        Object.keys(store.PersonajeEventos).map(key => {
                            const value = store.PersonajeEventos[key];
                            //let UrlWiki = value.urls[0].url
                            let exten = value.thumbnail.extension



                            return (

                                <div className="col-sm-4 py-4" key={value.id}>

                                    <CardEventos

                                        titulo={value.title}

                                        descripcion={value.description}
                                        Url={value.thumbnail.path + '.' + exten}
                                       // item1={value.start}
                                       // item2={value.modified}
                                       // item3={value.end}
                                     
                                      





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
export default Eventos;
