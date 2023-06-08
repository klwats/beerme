import React, { Component } from 'react';
import './DropDown.css';
import { fetchIndState } from '../API/apiCalls'
import { Link } from 'react-router-dom';
import { fetchStates } from '../API/apiCalls'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indState: ''
        }
    }

    handleChange = (e) => {
        this.setState({ indState: e.target.value }
        )
    }

    selectState = (event) => {
        this.setState({ stateBreweries: this.props.getInfo() })
    }


    render() {
        const options = this.props.getOptions();

        return (
            <main className='dropdown-container' >
                <div>
                    <h1>Select a State</h1>
                    <form>
                        <Link id="link" to={`/breweries/${this.state.indState}`}>
                            <button onClick={event => this.selectState(event)}>SUBMIT</button>
                        </Link>
                        <select className="dropdown-menu" name="states" id="states" onChange={this.handleChange}>
                            <option value='' defaultValue>Select Your State</option>
                            {options.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </form>
                </div>
            </main >
        );
    };
}


export default DropDown;