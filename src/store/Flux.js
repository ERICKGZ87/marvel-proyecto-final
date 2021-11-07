const getState = ({ getStore, getActions, setStore }) => {

    return {
        store:
        {
            Personajes: null,
            PersonajeEventos: null,
            Comics: null,

        },
        actions:
        {
            getFulname: () => {

                const { name, apellido } = getStore();

                return `${name} ${apellido}`;
            },

            getData1: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({ Personajes: data.data.results }))
            },
            getData2: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({ PersonajeEventos: data.data.results }))
            },
            getData3: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({ Comics: data.data.results }))
            },
        }
    }
}
export default getState;