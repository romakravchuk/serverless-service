import React, { Component } from 'react';
import ChartComponent from './chart';

export default class AppChart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * Component Did Mount
     */

    async componentDidMount() {}

    /**
     * Render
     */

    render() {
        return (
            <div className="container">
                <div className="tagline">a website built on serverless components via the serverless framework</div>

                <ChartComponent />
            </div>
        );
    }
}
