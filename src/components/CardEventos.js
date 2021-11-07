import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardEventos = ({ titulo, Url, descripcion, item1, item2, item3 }) => {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={Url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          {descripcion}
        </p>
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