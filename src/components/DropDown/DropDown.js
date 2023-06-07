import React, { Component } from 'react';
import './DropDown.css';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indState: ''
        }
    }

    // selectOption = (state) => {
    //     this.setState({ indState: state })
    //     this.props.selectOption(state)
    // }

    handleChange = (e) => {
        this.setState({ indState: e.target.value })
    }
    render() {
        const options = this.props.getOptions();
        return (
            <main className='dropdown-container'>
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
            </main>


        );
    };
}


export default DropDown;