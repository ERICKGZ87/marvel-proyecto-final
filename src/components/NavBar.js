//import { FaBoxes, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <div className="container">

            <div className="row">
              
                <div className="col-md-5">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                   
                        <div className="container-fluid nav justify-content-center">

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" aria-current="page" to="/">
                                           
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Personajes">
                                          
                                          Personajes
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Comics">
                                           
                                          Comics
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Series">
                                          
                                           Series
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="About">
                                            
                                            About
                                        </Link>
                                    </li>
                                 

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
                <div className="col-md-7">
               
                </div>
                
            </div>

        </div>







    )


}

export default NavBar