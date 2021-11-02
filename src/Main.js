import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./vistas/Home";
import InjectContext from './store/appContext';


const Main = () => {
    return (
        <BrowserRouter>
   
       

      
       <Switch>

       <Route exact path="/" component={Home} />
     
  

        


       </Switch>
               
            
        </BrowserRouter>
    )
}

export default InjectContext(Main);
