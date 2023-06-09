import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchIndState } from '../API/apiCalls'
import './State.css'

const State = () => {
    const { state } = useParams();
    const [breweriesList, setBreweriesList] = useState([]);
    const getStateBreweries = useCallback(async () => {
        const data = await fetchIndState(state);
        setBreweriesList(data);
    }, [state])
    useEffect(() => {
        getStateBreweries();
    }, [getStateBreweries])

    const breweryNames = breweriesList.map(brewery => {
        return (
            <section key={brewery.id} className="brewery-box">
                <h2 className='info'>{brewery.name}</h2>
                <p className='info'>{brewery.street}</p>
                <p className='info'>{brewery.city}</p>
                <Link to={`/breweries/${brewery.id}`}></Link>
                <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
                    {brewery.website_url}
                </a>
            </section>
        );
    });

    return (
        <div className='breweries-grid'>
            {breweryNames}
        </div>
    )
}


export default State;