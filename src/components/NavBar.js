import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from 'react-router-dom'
const NavBar = () => {

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center my-3">
                    <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><GiHamburgerMenu /> Menu</button>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header bg-warning">
                        <h5 id="offcanvasRightLabel">Menu</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" aria-current="page" to="/">
                            <img className="logoHome me-3 align-middle" src="./Icon1.png" />
                            <p className="bg-warning">Home</p>
                        </Link>
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" to="Personajes">
                            <img className="logoHome me-3" src="./Icon2.ico" />
                            Personajes
                        </Link>
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" to="Eventos">
                            <img className="logoHome me-3" src="./Icon3.png" />
                            Eventos
                        </Link>
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" to="Comics">
                            <img className="logoHome me-3" src="./Icon4.ico" />
                            Comics
                        </Link>
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" to="Series">
                            <img className="logoHome me-3" src="./Icon5.png" />
                            Series
                        </Link>
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" to="Contacto">
                            <img className="logoHome me-3" src="./Icon6.png" />
                            Contacto
                        </Link>
                        <Link className="nav-link text-dark fw-bold bg-warning m-3" to="About">
                            <img className="logoHome me-3" src="./Icon7.png" />
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )


}

export default NavBar