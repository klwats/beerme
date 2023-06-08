// import React, { Component } from 'react';
// import { fetchIndState } from '../API/apiCalls'
// import './State.css';

// class State extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             breweries: []
//         }
//     }

//     componentDidMount() {
//         const { state } = this.props.match.params;
//         fetchIndState(state)
//             .then((data) => {
//                 this.setState({ breweries: data });
//             })
//             .catch((err) => {
//                 console.error('Error:', err);
//             });
//     }

//     render() {
//         const { state } = this.props.match.params;
//         const breweriesList = this.state.breweries.map((brewery) => (
//             <div key={brewery.id}>{brewery.name}</div>
//         ));

//         return (
//             <div>
//                 <h2>Breweries in {state}</h2>
//                 {breweriesList}
//             </div>
//         );
//     }
// }



// export default State;