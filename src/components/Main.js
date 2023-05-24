import React, { Component } from 'react';
import PlayersPresentation from './PlayersPresentation';
import { ListOfPlayers } from './Share/ListOfPlayers';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            players: ListOfPlayers
        };
    }
    render() {
        return <PlayersPresentation players={this.state.players} />
    }
}
export default Main
