import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'
import Header from '../Header/Header'
import Home from '../Home/Home'
import State from '../State/State'
import ErrorPage from '../ErrorPage/ErrorPage'
//import { Route, Switch } from 'react-router-dom'


class App extends Component {
    constructor() {
        super();
        this.state = {
            error: false,
            states: []
        }
    }

    componentDidMount() {

    }

    //render header (component) with title as navlink
    //render dropdown (component) with states as options
    //router to home page
    //router to state page
    //router to error page


    render() {
        return (

            // <Switch>
            //     <Route exact path="/">
            //         <main>
            //             <Header />
            //             <Home />
            <DropDown placeholder="Select..." />
            //         </main>
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