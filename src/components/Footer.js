import { Link } from "react-router-dom";
import PropType from "prop-types";

const Footer = ({ titulo, descripcion, }) => {

    return (
        <div className="container-fluid" >

            <div className="row" id="footer">

                <div className="col-md-4"></div>

                <div className="col-md-4" >

                    <h4>2021 Copyright©</h4>


                </div>
                <div className="col-md-4"></div>



            </div>


        </div>

    )

}
Footer.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    Url: PropType.string,
    Item1: PropType.string,
    Item2: PropType.string,
    Item3: PropType.string,
}

export default Footer;