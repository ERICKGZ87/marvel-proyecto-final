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
            state.actions.getData1("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=8a432a54a0c45f83ea1e0ba67bb5e322&hash=8856823601a2b25665d210eabe018e39")
            state.actions.getData2("https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=8a432a54a0c45f83ea1e0ba67bb5e322&hash=8856823601a2b25665d210eabe018e39")
            state.actions.getData3("https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=8a432a54a0c45f83ea1e0ba67bb5e322&hash=8856823601a2b25665d210eabe018e39")
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