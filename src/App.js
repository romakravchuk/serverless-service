import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import imageHero from './images/hero.png';
import ChartComponent from "./chart";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.loading = false;
        this.state.votes = 0;
        this.state.chart = '';
        this.saveVote = this.saveVote.bind(this);
    }

    /**
     * Component Did Mount
     */

    async componentDidMount() {}

    /**
     * Save Vote
     */

    async saveVote() {
        fetch('http://localhost:3000/dev/hello')
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then((response) => {
                console.log(response);
                // ReactDOM.hydrate(response.body, )
                this.setState({ chart: ReactDOM.hydrate(response) });
            });
    }

    /**
     * Render
     */

    render() {
        return (
            <div className="container">
                <div className="tagline">a website built on serverless components via the serverless framework</div>
                <div>{process.env.NODE_ENV}</div>

                <ChartComponent />
            </div>
        );
    }
}
