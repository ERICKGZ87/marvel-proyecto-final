import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./vistas/Home";
import InjectContext from './store/appContext';
import Personajes from './vistas/Personajes';
import NavBar from './components/NavBar';


const Main = () => {
    return (
        <BrowserRouter>
         <NavBar/>
   
       

      
       <Switch>

       <Route exact path="/" component={Home} />
       <Route exact path="/Personajes" component={Personajes} />

  

        


       </Switch>
               
            
        </BrowserRouter>
    )
}

export default InjectContext(Main);
