export const extraInfo = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json() // change the end point 'API-url' to objet
        return data;
    } catch(err){

    };
}