const fetchStates = async () => {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    if (response.ok) {
        return (await response.json());

    } else {
        throw new Error(`Please try again there is an error. code: ${response.status}`)
    };
};

const fetchIndState = async (state) => {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=${state}`);
    if (response.ok) {
        return (await response.json());

    } else {
        throw new Error(`Please try again there is an error. code: ${response.status}`)
    };
};

// const fetchIndState = async (state) => {
//     try {
//         let breweries = []; // Define breweries as an empty array
//         const response = await fetch(`https://api.openbrewerydb.org/v1/breweries?by_state=${state}`);
//         if (response.ok) {
//             const data = await response.json();
//             breweries = data; // Assign the fetched data to breweries
//             console.log(breweries);
//             return breweries;
//         } else {
//             throw new Error(`Please try again. Error code: ${response.status}`);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

export { fetchStates, fetchIndState }