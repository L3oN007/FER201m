import React, { Component } from 'react'

export default class Films extends Component {
    render() {
        return (
            <div className="container" id='Film'>
                <div className="column">
                    <div className="film-card">
                        <div className="film-image">
                            <img src="./assets/images/poster1.jpg" alt="" />
                        </div>
                        <div className="film-details">
                            <h2 className="film-title">Star Wars: Episode IV - A New Hope</h2>
                            <p className="film-year">Year</p>
                            <p className="film-nation">Nation</p>
                        </div>
                        <div className="watch-film-btn">
                            <button>Watch Film</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
