import React from 'react';
import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

const ErrorPage = ({ message }) => {
    return (
        <section className="error-page">
            <div className="error-frame">
                {message === "Server error." ? (
                    <h2 className="error-message">A server error occured while we were trying to fetch your breweries. Please try again.</h2>
                ) : (

                    <h2 className="error-message">An unknown error has occured.</h2>)}
                <NavLink to="/" className="error-link"></NavLink>
            </div>
        </section>
    )
}

export default ErrorPage;
