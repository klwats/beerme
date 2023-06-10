import React from 'react';
import './Home.css';
import DropDown from '../DropDown/DropDown';
import PropTypes from 'prop-types';

const Home = ({ getOptions, getInfo }) => {
    return (
        <section className="home-page">
            <DropDown getOptions={getOptions} getInfo={getInfo} />
        </section>
    )
}

export default Home;

Home.propTypes = {
    getOptions: PropTypes.func.isRequired,
    getInfo: PropTypes.func.isRequired
}
