import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardPersonajes = ({ id,titulo,Url,descripcion,wiki}) => {

    return (
        <div className="card">
            <img src={Url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                  {descripcion}
                </p>
                <Link to={"/Personajes/" + id + "/DetallePersonaje"} className="btn btn-warning">
                    Mas Informacion
                </Link><br/>

                <a href={wiki} className="link-primary" target="_blank">Wiki Marvel</a>
                    
               
            </div>
        </div>

    )

}
CardPersonajes.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    id:PropType.number,
    Url: PropType.string,
   
    
    }
    
export default CardPersonajes;