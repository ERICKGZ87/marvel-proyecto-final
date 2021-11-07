import { FaBoxes, FaEnvelope, FaHome, } from 'react-icons/fa';

import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4">
                    <nav className="navbar navbar-expand-lg navbar-dark-brand-color ">

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
                                       <img className="logoHome" src="https://cdn.icon-icons.com/icons2/701/PNG/512/Marvel_icon-icons.com_61667.png"/>
                                        
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Personajes">
                                        <img className="logoHome" src="https://applicantes.com/wp-content/uploads/2013/04/IronMan3_icon.png"/>
                                            Personajes
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Eventos">
                                        <img className="logoHome" src="https://e1.pngegg.com/pngimages/1004/433/png-clipart-marvel-cinematic-universe-folder-icons-phase-one-theavengers-captainamerica-marvel-captain-america-themed-folder-thumbnail.png"/>
                                            Eventos
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Comics">
                                        <img className="logoHome" src="https://w7.pngwing.com/pngs/620/399/png-transparent-the-amazing-spider-man-2-computer-icons-spiderman-marvel-spider-man-illustration-heroes-fictional-character-shoe-thumbnail.png"/>
                                            Comics
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Series">
                                        <img className="logoHome" src="https://pbs.twimg.com/media/EaGQJ_BXYAIR30S.png:large"/>
                                            Series
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="Contact">
                                        <img className="logoHome" src="https://www.clipartmax.com/png/middle/209-2095178_marvel-icon-marvel-icons-png.png"/>
                                            Contact
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link d-flex flex-column align-items-center" to="About">
                                        <img className="logoHome" src="https://iconarchive.com/download/i51652/hopstarter/book/Marvel-Book.ico"/>
                                            About
                                        </Link>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>

                </div>
                <div className="col-md-4">

                </div>

            </div>

        </div>







    )


}

export default NavBar