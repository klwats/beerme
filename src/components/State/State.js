import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { fetchIndState } from '../API/apiCalls'
//import '.State.css'

const State = () => {
    const { state } = useParams();
    const [breweriesList, setBreweriesList] = useState([]);
    console.log(breweriesList)
    const getStateBreweries = useCallback(async () => {
        const data = await fetchIndState(state);
        setBreweriesList(data);
    }, [state])
    useEffect(() => {
        getStateBreweries();
    }, [getStateBreweries])

    const breweryNames = breweriesList.map(brewery => {
        return (
            <section>
                <h2>{brewery.name}</h2>
            </section>
        )
    })

    return (
        <div>
            {breweryNames}
        </div>
    )
}


export default State;