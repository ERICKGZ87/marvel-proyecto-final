import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardEventos = ({titulo,Url,descripcion,item1,item2,item3}) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
  <img src={Url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">
   {descripcion}
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><spam>Inicio</spam> <br/>{item1}</li>
    <li className="list-group-item"><spam>Modificacion</spam><br/>{item2}</li>
    <li className="list-group-item"><spam>Final</spam> {item3}<br/></li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">
      Card link
    </a>
    <a href="#" className="card-link">
      Another link
    </a>
  </div>
</div>

    )

}
CardEventos.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    Url: PropType.string,
    Item1: PropType.string,
    Item2: PropType.string,
    Item3: PropType.string,
    }
    
export default CardEventos;