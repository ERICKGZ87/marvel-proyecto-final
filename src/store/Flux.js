
const getState = ({ getStore, getActions, setStore }) => {

    return {
        store:
        {
            name: "erick",
            apellido: "gonzalez",


            Heroes: [
                { "id": 4, "name": "Abomination", "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1.jpg", "occupation": "Ex-Spy", "base": "Mobile", "intelligence": "38", "strength": "123", "speed": "25", "durability": "100", "power": "98", "combat": "64" },
                { "id": 1, "name": "A-Bomb", "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10060.jpg", "occupation": "Musician, adventurer, author; formerly talk show host", "base": "-", "intelligence": "38", "strength": "80", "speed": "25", "durability": "100", "power": "98", "combat": "64" },
                { "id": 2, "name": "Abe Sapien", "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/956.jpg", "occupation": "Paranormal Investigator", "base": "-", "intelligence": "38", "strength": "678", "speed": "25", "durability": "100", "power": "98", "combat": "64" },
                { "id": 3, "name": "Abin Sur", "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1460.jpg", "occupation": "Green Lantern, former history professor", "base": "Oa", "intelligence": "38", "strength": "300", "speed": "25", "durability": "100", "power": "98", "combat": "64" },
                { "id": 5, "name": "Abraxas", "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/181.jpg", "occupation": "Dimensional destroyer", "base": "-", "intelligence": "38", "strength": "432", "speed": "25", "durability": "100", "power": "98", "combat": "64" },
                { "id": 6, "name": "Absorbing Man", "url": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1448.jpg", "occupation": "Professional criminal; former professional boxer", "base": "-", "intelligence": "38", "strength": "99", "speed": "25", "durability": "100", "power": "98", "combat": "64" },

            ],

            Planetas: [
                { "id": 1, "diameter": "10465", "rotation_period": "23", "orbital_period": "304", "gravity": "1 standard", "population": "200000", "climate": "arid", "terrain": "desert", "surface_water": "1", "created": "2021-11-01T00:39:30.483Z", "edited": "2021-11-01T00:39:30.483Z", "name": "Tatooine" },
                { "id": 2, "diameter": "12500", "rotation_period": "24", "orbital_period": "364", "gravity": "1 standard", "population": "2000000000", "climate": "temperate", "terrain": "grasslands, mountains", "surface_water": "40", "created": "2021-11-01T00:39:30.483Z", "edited": "2021-11-01T00:39:30.483Z", "name": "Alderaan" },
                { "id": 3, "diameter": "10200", "rotation_period": "24", "orbital_period": "4818", "gravity": "1 standard", "population": "1000", "climate": "temperate, tropical", "terrain": "jungle, rainforests", "surface_water": "8", "created": "2021-11-01T00:39:30.483Z", "edited": "2021-11-01T00:39:30.483Z", "name": "Yavin IV" },
            ],
            users: null,

        },
        actions:
        {
            getFulname: () => {

                const { name, apellido } = getStore();

                return `${name} ${apellido}`;
            },

            getUsers: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({ users: data }))
            },

        }
    }

}



export default getState;