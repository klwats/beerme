import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { fetchIndState } from '../API/apiCalls'
import './State.css'
import propTypes from 'prop-types';

const State = () => {
    const { state } = useParams();
    const [breweriesList, setBreweriesList] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const getStateBreweries = useCallback(async () => {

        try {
            const data = await fetchIndState(state);
            setBreweriesList(data);
        } catch (error) {
            if (error instanceof Error) {
                setErrorMsg("Server error.");
            } else {
                setErrorMsg("Unknown error.");
            }
        }
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

        <>

            {errorMsg ? (
                <Redirect push to='/error' />
            ) : (

                <div className='state-page'>
                    <div className='state-header'>
                        <h1>{state}</h1>
                    </div>
                    <div className='breweries-grid'>
                        {breweryNames}
                    </div>
                </div>
            )}
        </>
    )
}


export default State;

State.propTypes = {
    state: propTypes.string.isRequired
}
