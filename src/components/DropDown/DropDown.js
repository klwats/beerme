import React, { Component } from 'react';
import './DropDown.css';
import { fetchIndState } from '../API/apiCalls'

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indState: '',
            breweries: []
        }
    }

    // selectOption = (state) => {
    //     this.setState({ indState: state })
    //     this.props.selectOption(state)
    // }

    componentDidMount() {

    }

    handleChange = (e) => {
        this.setState({ indState: e.target.value }, () => {
            this.getInfo()
        })


    }
    getInfo = () => {
        const state = this.state.indState;
        console.log(state)
        fetchIndState(state).then((data) => {
            this.setState({ breweries: data })
        })
            .catch((err) => {
                throw new Error('Error')
            })
    }




    render() {
        console.log(this.state.indState)
        const options = this.props.getOptions();
        const breweriesList = this.state.breweries.map((brewery, index) => (
            <option key={index} value={brewery.name}>{brewery.name}</option>
        ));
        return (
            <main className='dropdown-container' >
                <div>
                    <h1>Select a State</h1>
                    <form>
                        <select className="dropdown-menu" name="states" id="states" onChange={this.handleChange}>
                            <option value='' defaultValue>Select Your State</option>
                            {options.map((option, index) => (

                                <option key={index} value={option}>{option}</option>
                            ))}
                        </select>
                    </form>
                </div>
                <div>{breweriesList}</div>
            </main>


        );
    };
}


export default DropDown;