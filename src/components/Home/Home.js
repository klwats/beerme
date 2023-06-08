import React from 'react';
import './Home.css';
import DropDown from '../DropDown/DropDown';

const Home = ({ getOptions, getInfo }) => {
    return (
        <section className="home-page">
            <DropDown getOptions={getOptions} getInfo={getInfo} />

        </section>
    )
}

export default Home;
