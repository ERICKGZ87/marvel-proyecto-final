import { useContext, useEffect } from "react";
import CardSeries from "../components/CardSeries";



import { Context } from "../store/appContext";



const Series = () => {
    const { store } = useContext(Context);

    useEffect(() => {

        console.log(store)

    }, [])  


    return (
        <>
            <div className="container">
                <div className="row">

                    {

                        Object.keys(store.Series).map(key => {
                            const value = store.Series[key];
                            let exten = value.thumbnail.extension

                            return (

                                <div className="col-sm-4 py-3" key={value.id}>

                                    <CardSeries
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
export default Series;
// const Series = () => {

//     return (
//         <>
//  <div className="container">

// <div className="row">
//     <div className="col-md-1"></div>
//     <h1>Series</h1>
//     <div className="col-md-10">

   
  
   
//     </div>
//     <div className="col-md-1"></div>
// </div>

// </div>
           
//         </>
//     )
// }
// export default Series;
