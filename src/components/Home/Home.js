import React from 'react';
import './Home.css';
import DropDown from '../DropDown/DropDown';

const Home = ({ getOptions }) => {
    return (
        <section className="home-page">
            <DropDown getOptions={getOptions} />
        </section>
    )
}

export default Home;
