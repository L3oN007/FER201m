import React, { Component } from 'react';
import FilmsPresentation from './FilmsPresentation';
import { ListOfFilms } from './ListOfFilms';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: ListOfFilms
        };
    }
    render() {
        return <FilmsPresentation films={this.state.films} />;
    }
}
export default Main
