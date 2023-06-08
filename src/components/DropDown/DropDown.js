import React, { Component } from 'react';
import './DropDown.css';
import { fetchIndState } from '../API/apiCalls'
import { Link } from 'react-router-dom';
import { fetchStates } from '../API/apiCalls'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //indState: '',
            //states: [],
            breweries: []
        }
    }

    handleChange = (e) => {
        this.setState({ indState: e.target.value }
            // , () => {
            //     this.props.getInfo()
            // }
        )
    }

    selectState = (event) => {
        //event.preventDefault();
        this.setState({ stateBreweries: this.props.getInfo() })
    }

    // getInfo = () => {
    //     const state = this.state.indState;
    //     console.log(state)
    //     fetchIndState(state).then((data) => {
    //         this.setState({ breweries: data })
    //         console.log(data)
    //     })
    //         .catch((err) => {
    //             throw new Error('Error')
    //         })
    // }





    render() {
        // console.log(this.state.indState)
        // console.log(this.state.breweries)
        const options = this.props.getOptions();

        // const breweriesList = this.state.breweries.map((brewery, index) => (
        //     <option key={index} value={brewery.name}>{brewery.name}</option>
        //));
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
                {/* <div>{breweriesList}</div> */}
            </main >


        );
    };
}


export default DropDown;