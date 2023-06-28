import React, { Component } from 'react';
import FilmsPresentation from './FilmsPresentation';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: [],
        };
    }

    componentDidMount() {
        this.fetchFilms();
    }

    fetchFilms = async () => {
        try {
            const response = await fetch('https://648867740e2469c038fda6cc.mockapi.io/Films');
            if (response.ok) {
                const films = await response.json();
                this.setState({ films });
            } else {
                throw new Error('Failed to fetch films');
            }
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return <FilmsPresentation films={this.state.films} />;
    }
}

export default Main;
