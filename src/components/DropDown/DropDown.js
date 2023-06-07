import React from 'react';
import './Dropdown.css';


const Dropdown = ({ selectOption, getOptions }) => {

    const handleChange = (e) => {
        selectOption(e.target.value)
    }

    return (
        <main className='dropdown-container'>
            <div>
                <h1>Select a State</h1>
                <form>
                    <select className="dropdown-menu" name="states" id="states" onChange={handleChange}>
                        <option value='' defaultValue>Select Your State</option>
                        {getOptions().map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </form>
            </div>
        </main>


    );
};


export default Dropdown;