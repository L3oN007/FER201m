import React, { Component } from 'react';

export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>Class State
                <p>{this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
            </div>
        )
    }
}
