import { FaBoxes, FaEnvelope, FaHome, } from 'react-icons/fa';

import { Link } from 'react-router-dom'
const NavBar = () => {

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }


  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


    return (

        //
        // <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient fixed-top">
        //     <div className="container justify-content-center d-sm-flex flex-wrap">
        //         <div className="navbar-nav">



 
        //         </div>
        //     </div >
        // </nav >


        <div>
        <button className="btn">sadsdasd</button>
        <div id="mySidenav" className="sidenav">
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" aria-current="page" to="/">
                    <img className="logoHome" src="./Icon1.png" />
                    Home
                </Link>
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" to="Personajes">
                    <img className="logoHome" src="./Icon2.ico" />
                    Personajes
                </Link>
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" to="Eventos">
                    <img className="logoHome" src="./Icon3.png" />
                    Eventos
                </Link>
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" to="Comics">
                    <img className="logoHome" src="./Icon4.ico" />
                    Comics
                </Link>
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" to="Series">
                    <img className="logoHome" src="./Icon5.png" />
                    Series
                </Link>
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" to="Contact">
                    <img className="logoHome" src="./Icon6.png" />
                    Contact
                </Link>
                <Link className="nav-link d-flex flex-column align-items-center text-dark bg-warning my-1" to="About">
                    <img className="logoHome" src="./Icon7.png" />
                    About
                </Link>
        </div>
        </div>


    )


}

export default NavBar