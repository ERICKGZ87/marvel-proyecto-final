import { useContext, useEffect, useState } from "react";
import CardSeries from "../components/CardSeries";



import { Context } from "../store/appContext";



const Series = () => {
    const { store } = useContext(Context);
    const [ respApi, setRespApi ] = useState([])

    useEffect(() => {
        callApi()

    }, [])  

    const callApi = async()=>{

        let url = "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=2c7646b1592cf7f1709584014a70e2b5&hash=e76786c27c33203502f260f6be27384b"
    
       await fetch(url).then(response => response.json())
        .then(data => {
            console.log("data aqui", data.data.results)
            setRespApi(data.data.results)
        })
        .catch(e=>{
          console.log("error consulta series", e)
        })
    }

    return (
        <>
            <div className="container">
                <div className="row">

                    {

                      respApi.length >= 1 && respApi.map((k, value) => {
                
                            console.log("img", `${k.thumbnail.path}.${k.thumbnail.extension}`)
                            return (
                                <div className="col-sm-4 py-3" key={k.id}>
                                    <CardSeries
                                        title={k.title}
                                        description={k.description}
                                        fotoChica={`${k.thumbnail.path}.${k.thumbnail.extension}`}
                                        id={k.id}
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
