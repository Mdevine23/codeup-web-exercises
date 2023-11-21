const getPokemon = (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, options)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            return data
        });

}
const getLocations = (id = 1) => {
    const url = `https://pokeapi.co/api/v2/location/${id}`;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(url, options)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            return data
        });
};


//MAIN
( async ()=>{
   getPokemon(3).then((data) => {
       console.log(data)
    });
   getLocations(3).then((data) => {
        console.log(data)
    });
})();


