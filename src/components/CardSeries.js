import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardSeries = ({ title,description,fotoChica, id }) => {

    return (
        <div className="card">
            <img src={fotoChica} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <Link to={"/Series" + id + "/DetalleSeries"} className="btn btn-primary">
                    Mas Informacion
                </Link><br/>       
            </div>
        </div>
    )

}
CardSeries.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    id:PropType.number,
    Url: PropType.string,
    }
    
export default CardSeries;