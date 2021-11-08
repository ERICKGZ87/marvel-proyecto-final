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

        let url = "https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=8a432a54a0c45f83ea1e0ba67bb5e322&hash=8856823601a2b25665d210eabe018e39"
    
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
