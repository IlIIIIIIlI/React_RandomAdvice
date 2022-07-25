import axios from 'axios';
import React from 'react';
// we use axios to extract apis, and we need to install the thing in the cmd
// npm install --save axios


import './App.css';


class App extends React.Component {

    // let's see the app's component
    state = {
        // ONLY one field
        advice: ''
    };

    // where we call the API
    componentDidMount() {
        // for testing
        // console.log('Component did mount')
        this.fetchAdvice();
    }

    // this function is a method, means it is belongs to this class
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            // get the response
            .then((response) => {
                // we use this to get data steps by steps, 一步步更深入
                // console.log(response.data);
                // or 
                const { advice } = response.data.slip;
                // after we get the data, we update the value to state
                this.setState({ advice: advice });
            })

            // and catch the error
            .catch((error) => {
                console.log(error);
            });

    }


    render() {

        // get it out of the state
        const { advice } = this.state;

        return (
            <h1>{advice}</h1>
        );
    }
}

export default App;



