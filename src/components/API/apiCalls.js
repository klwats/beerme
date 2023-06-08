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


export { fetchStates, fetchIndState }