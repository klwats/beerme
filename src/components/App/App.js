import React, { Component } from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import State from '../State/State'
import ErrorPage from '../ErrorPage/ErrorPage'
import { Route, Switch } from 'react-router-dom'
import { fetchStates, fetchIndState } from '../API/apiCalls';


class App extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            states: [],
            stateBreweries: []
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
        })
            .catch(error => {
                this.setState({ error: true })
            });
    }

    getOptions = () => {
        const options = this.state.states.reduce((acc, state) => {
            if (!acc.includes(state.state)) {
                acc.push(state.state);
            }
            return acc;
        }, []);
        return options;
    }

    getInfo = () => {
        const state = this.state.indState;
        if (state) {
            fetchIndState(state).then((data) => {
                this.setState({ stateBreweries: data })
            })
                .catch((err) => {
                    this.setState({ error: true })
                })
        }
    }

    render() {
        if (this.state.error) {
            return (<ErrorPage message={'Server error.'} />)
        } else {
            return (
                <Switch>
                    <Route exact path="/">
                        <main>
                            <Header />
                            <Home getOptions={this.getOptions} getInfo={this.getInfo} />
                        </main>
                    </Route>
                    <Route
                        exact path='/breweries/:state'>
                        <Header />
                        <State />
                    </Route>
                    <Route exact path="/error" render={() => <ErrorPage />}>
                        <ErrorPage />
                    </Route>
                    <Route path="*" render={() => <ErrorPage />} />
                </Switch >)
        }
    }
}



export default App