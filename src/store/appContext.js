import { createContext, useState, useEffect } from "react";
import getState from "./Flux";



export const Context = createContext(null);

const InjectContext = PassedComponen => {

    const StoreWrapper = props => {

        const [state, setState] = useState(getState({

            getStore: () => state.store,
            getActions: () => state.actions,
            setStore: updateStore => setState({
                store: Object.assign(state.store, updateStore),
                actions: { ...state.actions }
            })
        }));
        //este useEffect se ejecuta la primera vez q se carga la pagina
        useEffect(() => {
            state.actions.getUsers("https://jsonplaceholder.typicode.com/users")
        }, [])

        return (
            <Context.Provider value={state}>
                    <PassedComponen {...props}/>
            </Context.Provider>

        )
        
    }
    return StoreWrapper;


}

export default InjectContext;