const fetchStates = async () => {
    const response = await fetch('https://api.openbrewerydb.org/v1/breweries');
    if (response.ok) {
        return (await response.json());

    } else {
        throw new Error(`Please try again there is an error. code: ${response.status}`)
    };
};


export { fetchStates }