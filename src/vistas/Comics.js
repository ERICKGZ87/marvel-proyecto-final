import { useContext, useEffect } from "react";
import CardComics from "../components/CardComics";



import { Context } from "../store/appContext";



const Comics = () => {
    const { store } = useContext(Context);

    useEffect(() => {

        console.log(store)

    }, [])  


    return (
        <>
            <div className="container">
                <div className="row">

                    {

                        Object.keys(store.Comics).map(key => {
                            const value = store.Comics[key];
                            let exten = value.thumbnail.extension

                            return (

                                <div className="col-sm-4 py-3" key={value.id}>

                                    <CardComics
                                        title={value.title}
                                        description={value.description}
                                        fotoChica={value.thumbnail.path + '.' + exten}
                                        id={value.id}
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
export default Comics;