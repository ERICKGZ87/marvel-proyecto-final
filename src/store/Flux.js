
const getState = ({ getStore, getActions, setStore }) => {

    return {
        store:
        {
            Personajes: null,

        },
        actions:
        {
            getFulname: () => {

                const { name, apellido } = getStore();

                return `${name} ${apellido}`;
            },

            getData: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({ Personajes: data.data.results }))
            },

        }
    }

}



export default getState;