import React, { Component } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Header from '../Header/Header'
import Home from '../Home/Home'
//import State from '../State/State'
//import ErrorPage from '../ErrorPage/ErrorPage'
//import { Route, Switch } from 'react-router-dom'
import { fetchStates } from '../API/apiCalls';


class App extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            states: [],
            selectedState: ''
        }
    }

    componentDidMount() {
        this.getStates();

    }

    getStates = () => {
        fetchStates().then((data) => {
            this.setState({
                states: data
            })
            console.log(this.state.states)
        })
            .catch(error => {
                throw new Error('error');
            });
    }

    getOptions = () => {
        const options = this.state.states.reduce((acc, state) => {
            if (!acc.includes(state.state)) {
                acc.push(state.state);
            }
            return acc;
        }, []);
        console.log(options);
        return options;
    }

    selectOption = (option) => {
        this.setState({ selectedState: option });

    }

    //render header (component) with title as navlink

    //router to home page
    //router to state page
    //router to error page


    render() {
        return (


            // <Switch>
            //<Route exact path="/">
            <main>
                <Header />
                {/* <Home /> */}
                <Dropdown placeholder="Select..." getOptions={this.getOptions} selectOption={this.selectOption} />
            </main>
            //     </Route>
            //     <Route exact path="/states/:state">
            //         <main>
            //             <Header />
            //             <State />
            //         </main>
            //     </Route>
            //     <Route exact path='/drink/:id' render={({ match }) => (
            //         <main>
            //             <Header />
            //             {/* <DrinkDetails id={match.params.id} /> */}
            //         </main>

            //     )} />

            //     <Route exact path="/error">
            //         <ErrorPage />
            //     </Route>
            // </Switch >
        )
    }

}




export default App