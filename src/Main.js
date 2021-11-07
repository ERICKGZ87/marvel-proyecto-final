import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./vistas/Home";
import InjectContext from './store/appContext';
import Personajes from './vistas/Personajes';
import NavBar from './components/NavBar';
import Comics from './vistas/Comics';
import Series from './vistas/Series';
import Contact from './vistas/Contact';
import About from './vistas/About';
import DetallePersonaje from './vistas/DetallePersonaje';
import DetalleComics from './vistas/DetalleComics';
import Eventos from './vistas/Eventos';
import Footer from './components/Footer';


const Main = () => {
    return (
        <BrowserRouter>
        <div className="container"> 
        <NavBar/>
   
       

      
       <Switch>

       <Route exact path="/" component={Home} />
       <Route exact path="/Personajes" component={Personajes} />
       <Route exact path="/Personajes/:product_id/DetallePersonaje" component={DetallePersonaje} />
       <Route exact path="/Comics/:product_id/DetalleComics" component={DetalleComics} />
       <Route exact path="/Comics" component={Comics} />
       <Route exact path="/Series" component={Series} />
       <Route exact path="/Eventos" component={Eventos} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/About" component={About} />
        


       </Switch>
           
       </div>
       <Footer/> 
    </BrowserRouter>
    )
}

export default InjectContext(Main);
